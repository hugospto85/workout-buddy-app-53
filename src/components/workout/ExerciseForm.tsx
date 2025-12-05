import { useState, useRef, useEffect } from 'react';
import { Exercise } from '@/types/workout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, X, Image, Video, Upload, Save } from 'lucide-react';

interface ExerciseFormProps {
  onAdd: (exercise: Omit<Exercise, 'id' | 'completed' | 'currentSet'>) => void;
  onCancel: () => void;
  editExercise?: Exercise;
}

const ExerciseForm = ({ onAdd, onCancel, editExercise }: ExerciseFormProps) => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState('12');
  const [restTime, setRestTime] = useState(60);
  const [imageUrl, setImageUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [imageSource, setImageSource] = useState<'url' | 'file'>('url');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editExercise) {
      setName(editExercise.name);
      setSets(editExercise.sets);
      setReps(editExercise.reps);
      setRestTime(editExercise.restTime);
      setImageUrl(editExercise.imageUrl || '');
      setYoutubeUrl(editExercise.youtubeUrl || '');
      // Detect if it's a base64 image (file upload)
      if (editExercise.imageUrl?.startsWith('data:')) {
        setImageSource('file');
      }
    }
  }, [editExercise]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({
      name: name.trim(),
      sets,
      reps,
      restTime,
      imageUrl: imageUrl.trim() || undefined,
      youtubeUrl: youtubeUrl.trim() || undefined,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setImageUrl(base64);
    };
    reader.readAsDataURL(file);
  };

  const isEditing = !!editExercise;

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

          {/* Imagem/GIF Section */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Imagem/GIF (opcional)
            </Label>
            
            <div className="flex gap-2 mb-2">
              <Button
                type="button"
                size="sm"
                variant={imageSource === 'url' ? 'default' : 'secondary'}
                onClick={() => {
                  setImageSource('url');
                  setImageUrl('');
                }}
              >
                URL
              </Button>
              <Button
                type="button"
                size="sm"
                variant={imageSource === 'file' ? 'default' : 'secondary'}
                onClick={() => {
                  setImageSource('file');
                  setImageUrl('');
                }}
              >
                <Upload className="h-4 w-4 mr-1" />
                Upload
              </Button>
            </div>

            {imageSource === 'url' ? (
              <Input
                placeholder="URL da imagem ou GIF"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="bg-secondary border-border"
              />
            ) : (
              <div className="space-y-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.gif"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {imageUrl ? 'Alterar Imagem' : 'Escolher Imagem'}
                </Button>
              </div>
            )}

            {imageUrl && (
              <div className="relative rounded-lg overflow-hidden border border-border">
                <img 
                  src={imageUrl} 
                  alt="Preview" 
                  className="w-full h-32 object-cover"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  className="absolute top-2 right-2"
                  onClick={() => setImageUrl('')}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>

          {/* YouTube Section */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Vídeo YouTube (opcional)
            </Label>
            <Input
              placeholder="URL do YouTube"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="bg-secondary border-border"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <Button type="submit" className="flex-1">
              {isEditing ? (
                <>
                  <Save className="h-4 w-4 mr-1" />
                  Salvar
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Adicionar
                </>
              )}
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
