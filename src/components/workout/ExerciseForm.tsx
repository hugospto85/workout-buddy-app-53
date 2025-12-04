import { useState } from 'react';
import { Exercise } from '@/types/workout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, X, Image, Video, Link } from 'lucide-react';

interface ExerciseFormProps {
  onAdd: (exercise: Omit<Exercise, 'id' | 'completed' | 'currentSet'>) => void;
  onCancel: () => void;
}

const ExerciseForm = ({ onAdd, onCancel }: ExerciseFormProps) => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState('12');
  const [restTime, setRestTime] = useState(60);
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaType, setMediaType] = useState<'image' | 'gif' | 'youtube'>('image');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({
      name: name.trim(),
      sets,
      reps,
      restTime,
      mediaUrl: mediaUrl.trim() || undefined,
      mediaType: mediaUrl.trim() ? mediaType : undefined,
    });
  };

  const detectMediaType = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      setMediaType('youtube');
    } else if (url.endsWith('.gif')) {
      setMediaType('gif');
    } else {
      setMediaType('image');
    }
  };

  return (
    <Card className="border-primary/30 animate-scale-in">
      <CardContent className="pt-5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome do Exercício</Label>
            <Input
              id="name"
              placeholder="Ex: Supino Reto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-secondary border-border"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <Label htmlFor="sets">Séries</Label>
              <Input
                id="sets"
                type="number"
                min={1}
                value={sets}
                onChange={(e) => setSets(parseInt(e.target.value) || 1)}
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reps">Reps</Label>
              <Input
                id="reps"
                placeholder="12"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rest">Descanso (s)</Label>
              <Input
                id="rest"
                type="number"
                min={0}
                step={5}
                value={restTime}
                onChange={(e) => setRestTime(parseInt(e.target.value) || 0)}
                className="bg-secondary border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="media">Mídia (opcional)</Label>
            <Input
              id="media"
              placeholder="URL da imagem, GIF ou YouTube"
              value={mediaUrl}
              onChange={(e) => {
                setMediaUrl(e.target.value);
                detectMediaType(e.target.value);
              }}
              className="bg-secondary border-border"
            />
            <div className="flex gap-2 mt-2">
              <Button
                type="button"
                size="sm"
                variant={mediaType === 'image' ? 'default' : 'secondary'}
                onClick={() => setMediaType('image')}
              >
                <Image className="h-4 w-4 mr-1" />
                Imagem
              </Button>
              <Button
                type="button"
                size="sm"
                variant={mediaType === 'gif' ? 'default' : 'secondary'}
                onClick={() => setMediaType('gif')}
              >
                <Link className="h-4 w-4 mr-1" />
                GIF
              </Button>
              <Button
                type="button"
                size="sm"
                variant={mediaType === 'youtube' ? 'default' : 'secondary'}
                onClick={() => setMediaType('youtube')}
              >
                <Video className="h-4 w-4 mr-1" />
                YouTube
              </Button>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button type="submit" className="flex-1">
              <Plus className="h-4 w-4" />
              Adicionar
            </Button>
            <Button type="button" variant="ghost" onClick={onCancel}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ExerciseForm;
