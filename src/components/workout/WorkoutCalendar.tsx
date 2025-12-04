import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { WorkoutSession } from '@/types/workout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatTime } from '@/hooks/useTimer';
import { ChevronLeft, ChevronRight, Calendar, Clock, Dumbbell, Trophy } from 'lucide-react';

interface WorkoutCalendarProps {
  sessions: WorkoutSession[];
  onBack: () => void;
}

const WorkoutCalendar = ({ sessions, onBack }: WorkoutCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const firstDayOfWeek = monthStart.getDay();
  const paddingDays = Array(firstDayOfWeek).fill(null);

  const getSessionsForDate = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return sessions.filter((s) => s.date === dateStr);
  };

  const selectedDateSessions = selectedDate ? getSessionsForDate(selectedDate) : [];

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border p-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h1 className="font-display text-2xl text-foreground">Histórico</h1>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Month Navigation */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentDate(subMonths(currentDate, 1))}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h2 className="font-display text-xl text-foreground capitalize">
                {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentDate(addMonths(currentDate, 1))}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-muted-foreground py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {paddingDays.map((_, i) => (
                <div key={`pad-${i}`} className="aspect-square" />
              ))}
              {daysInMonth.map((day) => {
                const daySessions = getSessionsForDate(day);
                const hasWorkout = daySessions.length > 0;
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isToday = isSameDay(day, new Date());

                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className={`
                      aspect-square rounded-lg flex flex-col items-center justify-center relative
                      transition-all duration-200
                      ${isSelected ? 'bg-primary text-primary-foreground' : ''}
                      ${!isSelected && isToday ? 'bg-secondary border border-primary/50' : ''}
                      ${!isSelected && !isToday ? 'hover:bg-secondary' : ''}
                    `}
                  >
                    <span className={`text-sm font-medium ${!isSameMonth(day, currentDate) ? 'text-muted-foreground' : ''}`}>
                      {format(day, 'd')}
                    </span>
                    {hasWorkout && (
                      <div className={`
                        absolute bottom-1 w-1.5 h-1.5 rounded-full
                        ${isSelected ? 'bg-primary-foreground' : 'bg-primary'}
                      `} />
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Selected Date Sessions */}
        {selectedDate && (
          <div className="space-y-3 animate-fade-in">
            <h3 className="font-display text-lg text-foreground">
              {format(selectedDate, "d 'de' MMMM", { locale: ptBR })}
            </h3>

            {selectedDateSessions.length === 0 ? (
              <Card className="border-dashed border-2 border-muted">
                <CardContent className="py-8 text-center">
                  <p className="text-muted-foreground">Nenhum treino neste dia</p>
                </CardContent>
              </Card>
            ) : (
              selectedDateSessions.map((session) => (
                <Card key={session.id} className="animate-fade-in">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-success shadow-lg">
                        <Trophy className="h-5 w-5 text-success-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{session.workoutName}</h4>
                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {formatTime(session.totalTime)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Dumbbell className="h-4 w-4" />
                            {session.exercisesCompleted}/{session.totalExercises} exercícios
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Stats Summary */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Este Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl bg-secondary">
                <p className="text-3xl font-display text-primary">
                  {sessions.filter((s) => {
                    const sessionDate = new Date(s.date);
                    return isSameMonth(sessionDate, currentDate);
                  }).length}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Treinos</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary">
                <p className="text-3xl font-display text-foreground">
                  {formatTime(
                    sessions
                      .filter((s) => {
                        const sessionDate = new Date(s.date);
                        return isSameMonth(sessionDate, currentDate);
                      })
                      .reduce((acc, s) => acc + s.totalTime, 0)
                  )}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Tempo Total</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkoutCalendar;
