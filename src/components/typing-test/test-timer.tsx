import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Timer } from 'lucide-react';

interface TestTimerProps {
  duration: number;
  isActive: boolean;
  onComplete: () => void;
}

export function TestTimer({ duration, isActive, onComplete }: TestTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, onComplete]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="p-4 flex items-center gap-2 bg-primary/5">
      <Timer className="w-5 h-5 text-primary" />
      <span className="font-mono text-xl font-bold text-primary">
        {formatTime(timeLeft)}
      </span>
    </Card>
  );
}