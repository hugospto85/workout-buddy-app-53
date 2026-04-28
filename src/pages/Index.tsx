import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Workout, WorkoutSession } from '@/types/workout';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import WorkoutCard from '@/components/workout/WorkoutCard';
import WorkoutBuilder from '@/components/workout/WorkoutBuilder';
import ActiveWorkout from '@/components/workout/ActiveWorkout';
import WorkoutCalendar from '@/components/workout/WorkoutCalendar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Plus, Calendar, Dumbbell, Flame, LogIn, LogOut, User, Cloud, CloudOff, RefreshCw, Wifi, WifiOff, Download, Upload } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useCloudSync } from '@/hooks/useCloudSync';
import { downloadWorkouts, parseWorkoutFile } from '@/lib/workoutShare';
import { useRef } from 'react';
import { User as SupabaseUser, Session } from '@supabase/supabase-js';

type ViewMode = 'list' | 'builder' | 'active' | 'calendar';

const Index = () => {
  const [workouts, setWorkouts] = useLocalStorage<Workout[]>('gym-workouts', []);
  const [sessions, setSessions] = useLocalStorage<WorkoutSession[]>('workout-sessions', []);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingWorkout, setEditingWorkout] = useState<Workout | undefined>();
  const [activeWorkout, setActiveWorkout] = useState<Workout | null>(null);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { sync, status: syncStatus, lastSync } = useCloudSync();
  const { toast } = useToast();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExportAll = () => {
    if (workouts.length === 0) {
      toast({ title: 'Nenhum treino para exportar', variant: 'destructive' });
      return;
    }
    downloadWorkouts(workouts, 'meus_treinos');
    toast({ title: 'Treinos exportados!', description: `${workouts.length} treino(s) salvos em arquivo.` });
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const text = await file.text();
      const imported = parseWorkoutFile(text);
      if (imported.length === 0) throw new Error('Nenhum treino encontrado');
      setWorkouts([...workouts, ...imported]);
      toast({
        title: 'Treinos importados!',
        description: `${imported.length} treino(s) adicionados.`,
      });
    } catch (err: any) {
      toast({
        title: 'Falha ao importar',
        description: err?.message || 'Verifique se o arquivo é válido.',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Até logo!",
      description: "Você saiu da sua conta.",
    });
  };

  const handleSync = async () => {
    if (!isOnline) {
      toast({
        title: 'Sem conexão',
        description: 'Você está offline. Conecte-se à internet para sincronizar.',
        variant: 'destructive',
      });
      return;
    }
    if (!user) {
      navigate('/auth');
      return;
    }
    await sync(workouts, sessions, setWorkouts, setSessions);
  };

  const handleSaveWorkout = (workoutData: Omit<Workout, 'id' | 'createdAt'> & { id?: string }) => {
    if (workoutData.id) {
      // Update existing
      setWorkouts(workouts.map((w) =>
        w.id === workoutData.id
          ? { ...w, name: workoutData.name, exercises: workoutData.exercises }
          : w
      ));
      toast({
        title: 'Treino atualizado!',
        description: `"${workoutData.name}" foi salvo com sucesso.`,
      });
    } else {
      // Create new
      const newWorkout: Workout = {
        id: Date.now().toString(),
        name: workoutData.name,
        exercises: workoutData.exercises,
        createdAt: new Date().toISOString(),
      };
      setWorkouts([...workouts, newWorkout]);
      toast({
        title: 'Treino criado!',
        description: `"${workoutData.name}" foi adicionado.`,
      });
    }
    setViewMode('list');
    setEditingWorkout(undefined);
  };

  const handleDeleteWorkout = (workoutId: string) => {
    const workout = workouts.find((w) => w.id === workoutId);
    setWorkouts(workouts.filter((w) => w.id !== workoutId));
    toast({
      title: 'Treino removido',
      description: workout ? `"${workout.name}" foi excluído.` : 'Treino excluído.',
      variant: 'destructive',
    });
  };

  const handleStartWorkout = (workout: Workout) => {
    setActiveWorkout(workout);
    setViewMode('active');
  };

  const handleEditWorkout = (workout: Workout) => {
    setEditingWorkout(workout);
    setViewMode('builder');
  };

  const handleWorkoutComplete = (sessionData: Omit<WorkoutSession, 'id'>) => {
    const newSession: WorkoutSession = {
      ...sessionData,
      id: Date.now().toString(),
    };
    setSessions([...sessions, newSession]);
    setActiveWorkout(null);
    setViewMode('list');
    toast({
      title: '🎉 Treino finalizado!',
      description: `Parabéns! Você completou "${sessionData.workoutName}".`,
    });
  };

  // Active Workout View
  if (viewMode === 'active' && activeWorkout) {
    return (
      <ActiveWorkout
        workout={activeWorkout}
        onComplete={handleWorkoutComplete}
        onCancel={() => {
          setActiveWorkout(null);
          setViewMode('list');
        }}
      />
    );
  }

  // Builder View
  if (viewMode === 'builder') {
    return (
      <WorkoutBuilder
        workout={editingWorkout}
        onSave={handleSaveWorkout}
        onCancel={() => {
          setViewMode('list');
          setEditingWorkout(undefined);
        }}
      />
    );
  }

  // Calendar View
  if (viewMode === 'calendar') {
    return (
      <WorkoutCalendar
        sessions={sessions}
        onBack={() => setViewMode('list')}
      />
    );
  }

  // Main List View
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-lg animate-pulse-glow">
                <Flame className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl text-foreground tracking-wider">
                  H&B FITNESS
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    {workouts.length} treino{workouts.length !== 1 ? 's' : ''}
                  </p>
                  <span className="text-muted-foreground">•</span>
                  {isOnline ? (
                    <span className="flex items-center gap-1 text-xs text-primary">
                      <Wifi className="h-3 w-3" /> Online
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-destructive">
                      <WifiOff className="h-3 w-3" /> Offline
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {user ? (
                <>
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-foreground max-w-[100px] truncate">
                      {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="icon-lg"
                    onClick={handleSync}
                    disabled={syncStatus === 'syncing' || !isOnline}
                    title={lastSync ? `Última sync: ${new Date(lastSync).toLocaleString('pt-BR')}` : 'Sincronizar com a nuvem'}
                  >
                    {syncStatus === 'syncing' ? (
                      <RefreshCw className="h-5 w-5 animate-spin" />
                    ) : isOnline ? (
                      <Cloud className="h-5 w-5" />
                    ) : (
                      <CloudOff className="h-5 w-5" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon-lg"
                    onClick={handleLogout}
                    title="Sair"
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </>
              ) : (
                <Button
                  variant="outline"
                  size="icon-lg"
                  onClick={() => navigate('/auth')}
                  title="Entrar para sincronizar"
                >
                  <LogIn className="h-5 w-5" />
                </Button>
              )}
              <Button
                variant="outline"
                size="icon-lg"
                onClick={() => fileInputRef.current?.click()}
                title="Importar treinos de arquivo"
              >
                <Upload className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon-lg"
                onClick={handleExportAll}
                title="Exportar todos os treinos"
              >
                <Download className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon-lg"
                onClick={() => setViewMode('calendar')}
              >
                <Calendar className="h-5 w-5" />
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                className="hidden"
                onChange={handleImportFile}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-4 pb-24 space-y-4">
        {workouts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
              <Dumbbell className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl text-foreground mb-2">
              Comece seu primeiro treino!
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Crie seus treinos personalizados e acompanhe seu progresso
            </p>
            <Button onClick={() => setViewMode('builder')} size="lg">
              <Plus className="h-5 w-5 mr-2" />
              Criar Treino
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                onStart={handleStartWorkout}
                onEdit={handleEditWorkout}
                onDelete={handleDeleteWorkout}
              />
            ))}
          </div>
        )}
      </main>

      {/* FAB */}
      {workouts.length > 0 && (
        <div className="fixed bottom-6 right-6">
          <Button
            onClick={() => setViewMode('builder')}
            size="icon-lg"
            className="h-16 w-16 rounded-full shadow-glow animate-pulse-glow"
          >
            <Plus className="h-7 w-7" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
