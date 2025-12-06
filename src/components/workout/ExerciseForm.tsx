import { useState, useRef, useEffect } from 'react';
import { Exercise } from '@/types/workout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, X, Image, Video, Upload, Save, Search } from 'lucide-react';
import ExerciseSearch from './ExerciseSearch';
import { ExerciseData } from '@/data/exerciseDatabase';

interface ExerciseFormProps {
  onAdd: (exercise: Omit<Exercise, 'id' | 'completed' | 'currentSet'>) => void;
  onCancel: () => void;
  editExercise?: Exercise;
}

const ExerciseForm = ({ onAdd, onCancel, editExercise }: ExerciseFormProps) => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState(3);
  const [eachSide, setEachSide] = useState(false);
  const [reps, setReps] = useState('12');
  const [repsType, setRepsType] = useState<'reps' | 'tempo'>('reps');
  const [restType, setRestType] = useState<'custom' | 'none' | 'side-change'>('custom');
  const [restTime, setRestTime] = useState(60);
  const [imageUrl, setImageUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [imageSource, setImageSource] = useState<'url' | 'file'>('url');
  const [showSearch, setShowSearch] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectFromDatabase = (exercise: ExerciseData) => {
    setName(exercise.name);
    if (exercise.imageUrl) {
      setImageUrl(exercise.imageUrl);
      setImageSource('url');
    }
    if (exercise.videoUrl) {
      setYoutubeUrl(exercise.videoUrl);
    }
    setShowSearch(false);
  };
  useEffect(() => {
    if (editExercise) {
      setName(editExercise.name);
      setSets(editExercise.sets);
      setEachSide(editExercise.eachSide || false);
      setReps(editExercise.reps);
      setRepsType(editExercise.repsType || 'reps');
      setRestType(editExercise.restType || 'custom');
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
      eachSide,
      reps,
      repsType,
      restType,
      restTime: restType === 'none' ? 0 : restType === 'side-change' ? -1 : restTime,
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
    <>
      {showSearch && (
        <ExerciseSearch
          onSelect={handleSelectFromDatabase}
          onClose={() => setShowSearch(false)}
        />
      )}
      
      <Card className="border-primary/30 animate-scale-in">
        <CardContent className="pt-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="name">Nome do Exercício</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSearch(true)}
                  className="h-7 text-xs gap-1"
                >
                  <Search className="h-3 w-3" />
                  Buscar na base
                </Button>
              </div>
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
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="eachSide"
                  checked={eachSide}
                  onCheckedChange={(checked) => setEachSide(checked === true)}
                />
                <Label htmlFor="eachSide" className="text-xs text-muted-foreground cursor-pointer">
                  De cada lado
                </Label>
              </div>
            </div>
            <div className="space-y-2">
              <Select value={repsType} onValueChange={(value: 'reps' | 'tempo') => setRepsType(value)}>
                <SelectTrigger className="h-auto p-0 border-0 bg-transparent">
                  <Label className="cursor-pointer">
                    <SelectValue />
                  </Label>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reps">Reps</SelectItem>
                  <SelectItem value="tempo">Tempo (s)</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="reps"
                placeholder={repsType === 'reps' ? '12' : '30'}
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label>Descanso</Label>
              <Select value={restType} onValueChange={(value: 'custom' | 'none' | 'side-change') => setRestType(value)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom">Personalizado</SelectItem>
                  <SelectItem value="none">Sem descanso</SelectItem>
                  <SelectItem value="side-change">Apenas trocar lado</SelectItem>
                </SelectContent>
              </Select>
              {restType === 'custom' && (
                <Input
                  id="rest"
                  type="number"
                  min={0}
                  step={5}
                  placeholder="60"
                  value={restTime}
                  onChange={(e) => setRestTime(parseInt(e.target.value) || 0)}
                  className="bg-secondary border-border"
                />
              )}
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
    </>
  );
};

export default ExerciseForm;
