import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Workout, WorkoutSession } from '@/types/workout';
import { useToast } from '@/hooks/use-toast';

export type SyncStatus = 'idle' | 'syncing' | 'success' | 'error';

interface SyncResult {
  workoutsUploaded: number;
  sessionsUploaded: number;
  workoutsDownloaded: number;
  sessionsDownloaded: number;
}

export function useCloudSync() {
  const [status, setStatus] = useState<SyncStatus>('idle');
  const [lastSync, setLastSync] = useState<string | null>(
    localStorage.getItem('last-sync-at')
  );
  const { toast } = useToast();

  const sync = useCallback(
    async (
      localWorkouts: Workout[],
      localSessions: WorkoutSession[],
      setWorkouts: (w: Workout[]) => void,
      setSessions: (s: WorkoutSession[]) => void
    ): Promise<SyncResult | null> => {
      setStatus('syncing');
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          toast({
            title: 'Faça login primeiro',
            description: 'Você precisa estar logado para sincronizar.',
            variant: 'destructive',
          });
          setStatus('error');
          return null;
        }

        // Upload workouts (upsert by local_id)
        const workoutRows = localWorkouts.map((w) => ({
          user_id: user.id,
          local_id: w.id,
          name: w.name,
          exercises: w.exercises as any,
          color: w.color ?? null,
        }));

        if (workoutRows.length > 0) {
          const { error } = await supabase
            .from('workouts')
            .upsert(workoutRows, { onConflict: 'user_id,local_id' });
          if (error) throw error;
        }

        // Upload sessions
        const sessionRows = localSessions.map((s) => ({
          user_id: user.id,
          local_id: s.id,
          workout_id: s.workoutId,
          workout_name: s.workoutName,
          date: s.date,
          total_time: s.totalTime,
          exercises_completed: s.exercisesCompleted,
          total_exercises: s.totalExercises,
        }));

        if (sessionRows.length > 0) {
          const { error } = await supabase
            .from('workout_sessions')
            .upsert(sessionRows, { onConflict: 'user_id,local_id' });
          if (error) throw error;
        }

        // Download from cloud and merge
        const { data: cloudWorkouts, error: wErr } = await supabase
          .from('workouts')
          .select('*')
          .eq('user_id', user.id);
        if (wErr) throw wErr;

        const { data: cloudSessions, error: sErr } = await supabase
          .from('workout_sessions')
          .select('*')
          .eq('user_id', user.id);
        if (sErr) throw sErr;

        const mergedWorkouts: Workout[] = (cloudWorkouts || []).map((w: any) => ({
          id: w.local_id,
          name: w.name,
          exercises: w.exercises || [],
          createdAt: w.created_at,
          color: w.color || undefined,
        }));

        const mergedSessions: WorkoutSession[] = (cloudSessions || []).map((s: any) => ({
          id: s.local_id,
          workoutId: s.workout_id,
          workoutName: s.workout_name,
          date: s.date,
          totalTime: s.total_time,
          exercisesCompleted: s.exercises_completed,
          totalExercises: s.total_exercises,
        }));

        // Merge: keep any local items not yet in cloud (shouldn't happen after upload, but safe)
        const localOnlyW = localWorkouts.filter(
          (lw) => !mergedWorkouts.find((mw) => mw.id === lw.id)
        );
        const localOnlyS = localSessions.filter(
          (ls) => !mergedSessions.find((ms) => ms.id === ls.id)
        );

        setWorkouts([...mergedWorkouts, ...localOnlyW]);
        setSessions([...mergedSessions, ...localOnlyS]);

        const now = new Date().toISOString();
        localStorage.setItem('last-sync-at', now);
        setLastSync(now);
        setStatus('success');

        const result: SyncResult = {
          workoutsUploaded: workoutRows.length,
          sessionsUploaded: sessionRows.length,
          workoutsDownloaded: mergedWorkouts.length,
          sessionsDownloaded: mergedSessions.length,
        };

        toast({
          title: '✅ Sincronizado!',
          description: `${result.workoutsDownloaded} treinos e ${result.sessionsDownloaded} sessões na nuvem.`,
        });

        return result;
      } catch (err: any) {
        console.error('Sync error:', err);
        setStatus('error');
        toast({
          title: 'Erro ao sincronizar',
          description: err.message || 'Tente novamente.',
          variant: 'destructive',
        });
        return null;
      }
    },
    [toast]
  );

  return { sync, status, lastSync };
}
