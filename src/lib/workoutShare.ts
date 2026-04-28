import { Workout } from '@/types/workout';

const FILE_VERSION = 1;
const FILE_TYPE = 'hb-fitness-workout';

interface WorkoutFile {
  type: string;
  version: number;
  exportedAt: string;
  workouts: Workout[];
}

export const buildWorkoutFile = (workouts: Workout[]): WorkoutFile => ({
  type: FILE_TYPE,
  version: FILE_VERSION,
  exportedAt: new Date().toISOString(),
  workouts,
});

export const downloadWorkouts = (workouts: Workout[], filename?: string) => {
  const data = buildWorkoutFile(workouts);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const safeName = (filename || (workouts.length === 1 ? workouts[0].name : 'treinos'))
    .replace(/[^a-z0-9-_]+/gi, '_')
    .toLowerCase();
  a.download = `${safeName}.hbfit.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const parseWorkoutFile = (text: string): Workout[] => {
  const data = JSON.parse(text);
  // Accept either our wrapper or a raw array / single workout
  let workouts: any[];
  if (Array.isArray(data)) workouts = data;
  else if (data?.workouts && Array.isArray(data.workouts)) workouts = data.workouts;
  else if (data?.exercises && data?.name) workouts = [data];
  else throw new Error('Arquivo inválido');

  return workouts.map((w) => ({
    id: Date.now().toString() + Math.random().toString(36).slice(2, 8),
    name: String(w.name || 'Treino importado'),
    exercises: Array.isArray(w.exercises) ? w.exercises.map((ex: any) => ({
      ...ex,
      id: Date.now().toString() + Math.random().toString(36).slice(2, 8),
    })) : [],
    createdAt: new Date().toISOString(),
    color: w.color,
  }));
};

export const shareWorkout = async (workout: Workout): Promise<'shared' | 'downloaded'> => {
  const data = buildWorkoutFile([workout]);
  const json = JSON.stringify(data, null, 2);
  const safeName = workout.name.replace(/[^a-z0-9-_]+/gi, '_').toLowerCase();
  const filename = `${safeName}.hbfit.json`;

  // Try Web Share API with files first
  try {
    const file = new File([json], filename, { type: 'application/json' });
    const nav = navigator as any;
    if (nav.canShare && nav.canShare({ files: [file] })) {
      await nav.share({
        files: [file],
        title: workout.name,
        text: `Treino: ${workout.name}`,
      });
      return 'shared';
    }
  } catch (e) {
    // user cancelled or unsupported – fall through
  }

  downloadWorkouts([workout], workout.name);
  return 'downloaded';
};
