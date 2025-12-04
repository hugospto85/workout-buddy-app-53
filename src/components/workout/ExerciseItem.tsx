import { Exercise } from '@/types/workout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GripVertical, Trash2, Clock, Layers } from 'lucide-react';

interface ExerciseItemProps {
  exercise: Exercise;
  index: number;
  onRemove: (id: string) => void;
  showMedia?: boolean;
}

const ExerciseItem = ({ exercise, index, onRemove, showMedia = false }: ExerciseItemProps) => {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  return (
    <Card className="border-border/30 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/20 text-primary font-display text-lg">
            {index + 1}
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground truncate">{exercise.name}</h4>
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Layers className="h-4 w-4" />
                {exercise.sets} séries
              </span>
              <span>×</span>
              <span>{exercise.reps} reps</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {exercise.restTime}s
              </span>
            </div>

            {showMedia && exercise.mediaUrl && (
              <div className="mt-3 rounded-lg overflow-hidden bg-secondary">
                {exercise.mediaType === 'youtube' ? (
                  <iframe
                    src={getYouTubeEmbedUrl(exercise.mediaUrl) || ''}
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={exercise.mediaUrl}
                    alt={exercise.name}
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => onRemove(exercise.id)}
            className="text-muted-foreground hover:text-destructive shrink-0"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseItem;
