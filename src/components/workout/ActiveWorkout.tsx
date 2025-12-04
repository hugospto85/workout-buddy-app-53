import { useState, useEffect } from 'react';
import { Workout, Exercise, WorkoutSession } from '@/types/workout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useTimer, formatTime } from '@/hooks/useTimer';
import RestTimerModal from './RestTimerModal';
import { Check, X, Clock, ChevronRight, Trophy, Dumbbell } from 'lucide-react';

interface ActiveWorkoutProps {
  workout: Workout;
  onComplete: (session: Omit<WorkoutSession, 'id'>) => void;
  onCancel: () => void;
}

const ActiveWorkout = ({ workout, onComplete, onCancel }: ActiveWorkoutProps) => {
  const [exercises, setExercises] = useState<Exercise[]>(
    workout.exercises.map((ex) => ({ ...ex, completed: false, currentSet: 1 }))
  );
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showRestTimer, setShowRestTimer] = useState(false);
  const { seconds: totalTime, start: startTimer, pause: pauseTimer } = useTimer(0, false);

  const currentExercise = exercises[currentExerciseIndex];
  const completedExercises = exercises.filter((ex) => ex.completed).length;
  const progress = (completedExercises / exercises.length) * 100;

  useEffect(() => {
    startTimer();
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
    return () => pauseTimer();
  }, []);

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const handleCompleteSet = () => {
    const updatedExercises = [...exercises];
    const exercise = updatedExercises[currentExerciseIndex];

    if (exercise.currentSet! < exercise.sets) {
      // More sets remaining - start rest timer
      exercise.currentSet = exercise.currentSet! + 1;
      setExercises(updatedExercises);
      if (exercise.restTime > 0) {
        setShowRestTimer(true);
      }
    } else {
      // Exercise completed
      exercise.completed = true;
      setExercises(updatedExercises);

      if (currentExerciseIndex < exercises.length - 1) {
        // Start rest timer before next exercise
        if (exercise.restTime > 0) {
          setShowRestTimer(true);
        } else {
          setCurrentExerciseIndex(currentExerciseIndex + 1);
        }
      } else {
        // All exercises completed
        handleFinishWorkout();
      }
    }
  };

  const handleRestComplete = () => {
    setShowRestTimer(false);
    if (exercises[currentExerciseIndex].completed && currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const handleSkipRest = () => {
    setShowRestTimer(false);
    if (exercises[currentExerciseIndex].completed && currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const handleFinishWorkout = () => {
    pauseTimer();
    onComplete({
      workoutId: workout.id,
      workoutName: workout.name,
      date: new Date().toISOString().split('T')[0],
      totalTime,
      exercisesCompleted: completedExercises + 1,
      totalExercises: exercises.length,
    });
  };

  const nextExercise = exercises[currentExerciseIndex + 1];

  if (completedExercises === exercises.length) {
    return (
      <div className="min-h-screen bg-background p-4 flex items-center justify-center">
        <Card className="w-full max-w-md text-center animate-scale-in">
          <CardContent className="pt-8 pb-8">
            <div className="w-20 h-20 rounded-full gradient-success flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Trophy className="h-10 w-10 text-success-foreground" />
            </div>
            <h2 className="font-display text-4xl text-foreground mb-2">TREINO COMPLETO!</h2>
            <p className="text-muted-foreground mb-6">
              Tempo total: <span className="text-foreground font-semibold">{formatTime(totalTime)}</span>
            </p>
            <Button onClick={handleFinishWorkout} size="lg" className="w-full">
              Salvar Treino
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="font-display text-2xl text-foreground">{workout.name}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{formatTime(totalTime)}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">
          {completedExercises} de {exercises.length} exercícios
        </p>
      </div>

      {/* Current Exercise */}
      <div className="p-4 space-y-4">
        <Card className="border-primary/30 shadow-glow">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-lg">
                <Dumbbell className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-primary font-medium">Exercício Atual</p>
                <CardTitle className="text-2xl">{currentExercise.name}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {currentExercise.mediaUrl && (
              <div className="rounded-xl overflow-hidden bg-secondary mb-4">
                {currentExercise.mediaType === 'youtube' ? (
                  <iframe
                    src={getYouTubeEmbedUrl(currentExercise.mediaUrl) || ''}
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={currentExercise.mediaUrl}
                    alt={currentExercise.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
              </div>
            )}

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 rounded-xl bg-secondary">
                <p className="text-3xl font-display text-primary">
                  {currentExercise.currentSet}/{currentExercise.sets}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Série</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary">
                <p className="text-3xl font-display text-foreground">{currentExercise.reps}</p>
                <p className="text-xs text-muted-foreground mt-1">Reps</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary">
                <p className="text-3xl font-display text-foreground">{currentExercise.restTime}s</p>
                <p className="text-xs text-muted-foreground mt-1">Descanso</p>
              </div>
            </div>

            <Button
              onClick={handleCompleteSet}
              size="lg"
              className="w-full h-16 text-lg"
            >
              <Check className="h-6 w-6 mr-2" />
              {currentExercise.currentSet! < currentExercise.sets
                ? 'Completar Série'
                : 'Finalizar Exercício'}
            </Button>
          </CardContent>
        </Card>

        {/* Next Exercise Preview */}
        {nextExercise && (
          <Card className="opacity-60">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Próximo</p>
                  <p className="font-medium text-foreground">{nextExercise.name}</p>
                </div>
                <div className="ml-auto text-sm text-muted-foreground">
                  {nextExercise.sets}×{nextExercise.reps}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Rest Timer Modal */}
      <RestTimerModal
        isOpen={showRestTimer}
        restTime={currentExercise.restTime}
        exerciseName={currentExercise.name}
        nextExerciseName={
          exercises[currentExerciseIndex].completed
            ? nextExercise?.name
            : undefined
        }
        onComplete={handleRestComplete}
        onSkip={handleSkipRest}
      />
    </div>
  );
};

export default ActiveWorkout;
