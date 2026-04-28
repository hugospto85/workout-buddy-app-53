import { Workout } from '@/types/workout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Edit, Trash2, Dumbbell, Share2 } from 'lucide-react';
import { shareWorkout } from '@/lib/workoutShare';
import { useToast } from '@/hooks/use-toast';

interface WorkoutCardProps {
  workout: Workout;
  onStart: (workout: Workout) => void;
  onEdit: (workout: Workout) => void;
  onDelete: (workoutId: string) => void;
}

const WorkoutCard = ({ workout, onStart, onEdit, onDelete }: WorkoutCardProps) => {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      const result = await shareWorkout(workout);
      toast({
        title: result === 'shared' ? 'Treino compartilhado!' : 'Arquivo exportado!',
        description: result === 'shared'
          ? 'Envie para quem quiser pelo app escolhido.'
          : `"${workout.name}.hbfit.json" foi baixado. Envie para outra pessoa importar.`,
      });
    } catch {
      toast({ title: 'Erro ao compartilhar', variant: 'destructive' });
    }
  };

  return (
    <Card className="group hover:border-primary/30 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-lg">
              <Dumbbell className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-xl">{workout.name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {workout.exercises.length} exercício{workout.exercises.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {workout.exercises.slice(0, 3).map((exercise) => (
            <span
              key={exercise.id}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {exercise.name}
            </span>
          ))}
          {workout.exercises.length > 3 && (
            <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
              +{workout.exercises.length - 3} mais
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => onStart(workout)} 
            className="flex-1"
            size="lg"
          >
            <Play className="h-5 w-5" />
            Iniciar
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            onClick={() => onEdit(workout)}
          >
            <Edit className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            onClick={handleShare}
            title="Compartilhar / exportar"
          >
            <Share2 className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            onClick={() => onDelete(workout.id)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
