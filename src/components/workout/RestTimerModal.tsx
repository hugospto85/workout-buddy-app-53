import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useTimer, formatTime } from '@/hooks/useTimer';
import { SkipForward, Pause, Play } from 'lucide-react';

interface RestTimerModalProps {
  isOpen: boolean;
  restTime: number;
  exerciseName: string;
  nextExerciseName?: string;
  onComplete: () => void;
  onSkip: () => void;
}

const RestTimerModal = ({
  isOpen,
  restTime,
  exerciseName,
  nextExerciseName,
  onComplete,
  onSkip,
}: RestTimerModalProps) => {
  const { seconds, isRunning, start, pause, reset, setTime } = useTimer(restTime, true, onComplete);
  const [hasNotified, setHasNotified] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTime(restTime);
      start();
      setHasNotified(false);
    }
  }, [isOpen, restTime]);

  useEffect(() => {
    if (seconds === 0 && !hasNotified && isOpen) {
      setHasNotified(true);
      // Play notification sound
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.3;
        
        oscillator.start();
        setTimeout(() => {
          oscillator.stop();
          audioContext.close();
        }, 500);
      } catch (e) {
        console.log('Audio notification not available');
      }

      // Show browser notification if permitted
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('⏰ Descanso finalizado!', {
          body: nextExerciseName ? `Próximo: ${nextExerciseName}` : 'Continue seu treino!',
          icon: '/favicon.ico',
        });
      }
    }
  }, [seconds, hasNotified, isOpen, nextExerciseName]);

  const progress = restTime > 0 ? ((restTime - seconds) / restTime) * 100 : 100;

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md bg-card border-border" aria-describedby="rest-timer-description">
        <DialogTitle className="sr-only">Timer de Descanso</DialogTitle>
        <div className="flex flex-col items-center py-6" id="rest-timer-description">
          <p className="text-muted-foreground text-sm mb-2">Descanso após</p>
          <h3 className="font-display text-2xl text-foreground mb-6">{exerciseName}</h3>
          
          <div className={`relative flex items-center justify-center w-48 h-48 rounded-full border-4 border-primary/20 mb-6 ${seconds <= 5 && seconds > 0 ? 'animate-countdown' : ''}`}>
            <div className="absolute inset-2 rounded-full gradient-primary opacity-10" />
            <span className={`font-display text-6xl ${seconds <= 5 ? 'text-primary' : 'text-foreground'}`}>
              {formatTime(seconds)}
            </span>
          </div>

          <Progress value={progress} className="w-full h-2 mb-6" />

          {nextExerciseName && (
            <p className="text-muted-foreground text-sm mb-4">
              Próximo: <span className="text-foreground font-medium">{nextExerciseName}</span>
            </p>
          )}

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={isRunning ? pause : start}
            >
              {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              {isRunning ? 'Pausar' : 'Continuar'}
            </Button>
            <Button
              size="lg"
              onClick={onSkip}
            >
              <SkipForward className="h-5 w-5" />
              Pular
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RestTimerModal;
