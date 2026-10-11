import { Workout } from '@/types/workout';

export interface AbcDay {
  letter: 'A' | 'B' | 'C';
  title: string;
  muscles: string;
  focus: string;
  color: string;
  exercises: { name: string; sets: number; reps: string }[];
}

export const ABC_PLAN: AbcDay[] = [
  {
    letter: 'A',
    title: 'Treino A',
    muscles: 'Peito, Tríceps e Ombros',
    focus: 'Foco em empurrar',
    color: '#f97316',
    exercises: [
      { name: 'Supino Reto com Barra', sets: 4, reps: '8-10' },
      { name: 'Supino Inclinado com Halteres', sets: 3, reps: '10-12' },
      { name: 'Desenvolvimento com Halteres', sets: 3, reps: '10-12' },
      { name: 'Elevação Lateral', sets: 3, reps: '12-15' },
      { name: 'Tríceps Pulley', sets: 3, reps: '12-15' },
    ],
  },
  {
    letter: 'B',
    title: 'Treino B',
    muscles: 'Costas, Bíceps e Trapézio',
    focus: 'Foco em puxar',
    color: '#3b82f6',
    exercises: [
      { name: 'Puxada Frontal', sets: 4, reps: '8-10' },
      { name: 'Remada Curvada com Barra', sets: 3, reps: '8-10' },
      { name: 'Remada Unilateral com Halter', sets: 3, reps: '10-12' },
      { name: 'Encolhimento com Halteres', sets: 3, reps: '12-15' },
      { name: 'Rosca Direta com Barra', sets: 3, reps: '10-12' },
    ],
  },
  {
    letter: 'C',
    title: 'Treino C',
    muscles: 'Pernas completas e Abdômen',
    focus: 'Foco em membros inferiores e core',
    color: '#22c55e',
    exercises: [
      { name: 'Agachamento Livre', sets: 4, reps: '8-10' },
      { name: 'Leg Press 45°', sets: 3, reps: '10-12' },
      { name: 'Cadeira Extensora', sets: 3, reps: '12-15' },
      { name: 'Mesa Flexora', sets: 3, reps: '12-15' },
      { name: 'Prancha Abdominal', sets: 3, reps: '45' },
    ],
  },
];

export function buildAbcWorkouts(): Workout[] {
  const now = new Date().toISOString();
  return ABC_PLAN.map((day) => ({
    id: crypto.randomUUID(),
    name: `${day.title} - ${day.muscles}`,
    createdAt: now,
    color: day.color,
    exercises: day.exercises.map((ex) => ({
      id: crypto.randomUUID(),
      name: ex.name,
      sets: ex.sets,
      reps: ex.reps,
      repsType: ex.name.includes('Prancha') ? 'tempo' : 'reps',
      restType: 'custom',
      restTime: 60,
    })),
  }));
}

/** Appends the ABC routine to the locally saved workouts. */
export function addAbcToStorage() {
  const raw = localStorage.getItem('gym-workouts');
  const current = raw ? JSON.parse(raw) : [];
  localStorage.setItem('gym-workouts', JSON.stringify([...current, ...buildAbcWorkouts()]));
}
