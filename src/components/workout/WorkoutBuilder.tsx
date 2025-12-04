import { useState } from 'react';
import { Workout, Exercise } from '@/types/workout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ExerciseForm from './ExerciseForm';
import ExerciseItem from './ExerciseItem';
import { ArrowLeft, Plus, Save, Dumbbell } from 'lucide-react';

interface WorkoutBuilderProps {
  workout?: Workout;
  onSave: (workout: Omit<Workout, 'id' | 'createdAt'> & { id?: string }) => void;
  onCancel: () => void;
}

const WorkoutBuilder = ({ workout, onSave, onCancel }: WorkoutBuilderProps) => {
  const [name, setName] = useState(workout?.name || '');
  const [exercises, setExercises] = useState<Exercise[]>(workout?.exercises || []);
  const [showExerciseForm, setShowExerciseForm] = useState(false);

  const handleAddExercise = (exerciseData: Omit<Exercise, 'id' | 'completed' | 'currentSet'>) => {
    const newExercise: Exercise = {
      ...exerciseData,
      id: Date.now().toString(),
    };
    setExercises([...exercises, newExercise]);
    setShowExerciseForm(false);
  };

  const handleRemoveExercise = (id: string) => {
    setExercises(exercises.filter((ex) => ex.id !== id));
  };

  const handleSave = () => {
    if (!name.trim() || exercises.length === 0) return;

    onSave({
      id: workout?.id,
      name: name.trim(),
      exercises,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border p-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-display text-2xl text-foreground">
            {workout ? 'Editar Treino' : 'Novo Treino'}
          </h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Workout Name */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-primary" />
              Nome do Treino
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Ex: Treino A - Peito e Tríceps"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-secondary border-border text-lg h-12"
            />
          </CardContent>
        </Card>

        {/* Exercises List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-foreground">
              Exercícios ({exercises.length})
            </h2>
          </div>

          {exercises.length === 0 && !showExerciseForm && (
            <Card className="border-dashed border-2 border-muted">
              <CardContent className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Nenhum exercício adicionado
                </p>
                <Button onClick={() => setShowExerciseForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Exercício
                </Button>
              </CardContent>
            </Card>
          )}

          {exercises.map((exercise, index) => (
            <ExerciseItem
              key={exercise.id}
              exercise={exercise}
              index={index}
              onRemove={handleRemoveExercise}
              showMedia
            />
          ))}

          {showExerciseForm ? (
            <ExerciseForm
              onAdd={handleAddExercise}
              onCancel={() => setShowExerciseForm(false)}
            />
          ) : exercises.length > 0 && (
            <Button
              variant="outline"
              className="w-full h-12"
              onClick={() => setShowExerciseForm(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Exercício
            </Button>
          )}
        </div>

        {/* Save Button */}
        <div className="sticky bottom-4">
          <Button
            onClick={handleSave}
            disabled={!name.trim() || exercises.length === 0}
            size="lg"
            className="w-full h-14 text-lg shadow-glow"
          >
            <Save className="h-5 w-5 mr-2" />
            Salvar Treino
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutBuilder;
