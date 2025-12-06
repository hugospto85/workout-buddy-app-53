import { useState, useEffect, useRef } from 'react';
import { Search, Database, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { exerciseDatabase, exerciseCategories, searchExercises, ExerciseData } from '@/data/exerciseDatabase';

interface ExerciseSearchProps {
  onSelect: (exercise: ExerciseData) => void;
  onClose: () => void;
}

const ExerciseSearch = ({ onSelect, onClose }: ExerciseSearchProps) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('');
  const [results, setResults] = useState<ExerciseData[]>(exerciseDatabase.slice(0, 20));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const filtered = searchExercises(query, category || undefined);
    setResults(filtered.slice(0, 50));
  }, [query, category]);

  const handleSelect = (exercise: ExerciseData) => {
    onSelect(exercise);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-background/95 z-50 flex flex-col animate-fade-in">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-3">
          <Database className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold">Buscar Exercício</h2>
          <Button variant="ghost" size="sm" className="ml-auto" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              placeholder="Buscar por nome, músculo ou equipamento..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 bg-secondary border-border"
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[140px] bg-secondary border-border">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {exerciseCategories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <p className="text-xs text-muted-foreground mt-2">
          {results.length} exercícios encontrados • Base: 100+ exercícios
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {results.map(exercise => (
            <button
              key={exercise.id}
              onClick={() => handleSelect(exercise)}
              className="w-full text-left p-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground truncate">{exercise.name}</h3>
                  {exercise.nameEn && (
                    <p className="text-xs text-muted-foreground truncate">{exercise.nameEn}</p>
                  )}
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                      {exercise.category}
                    </Badge>
                    {exercise.equipment && (
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                        {exercise.equipment}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {exercise.muscles.slice(0, 3).map(muscle => (
                  <span key={muscle} className="text-[10px] text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">
                    {muscle}
                  </span>
                ))}
                {exercise.muscles.length > 3 && (
                  <span className="text-[10px] text-muted-foreground">+{exercise.muscles.length - 3}</span>
                )}
              </div>
            </button>
          ))}
          
          {results.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>Nenhum exercício encontrado</p>
              <p className="text-sm mt-1">Tente outra busca ou adicione manualmente</p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ExerciseSearch;
