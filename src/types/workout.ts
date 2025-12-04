export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  restTime: number; // in seconds
  mediaUrl?: string;
  mediaType?: 'image' | 'gif' | 'youtube';
  completed?: boolean;
  currentSet?: number;
}

export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
  createdAt: string;
  color?: string;
}

export interface WorkoutSession {
  id: string;
  workoutId: string;
  workoutName: string;
  date: string;
  totalTime: number; // in seconds
  exercisesCompleted: number;
  totalExercises: number;
}

export interface DayWorkouts {
  [date: string]: WorkoutSession[];
}
