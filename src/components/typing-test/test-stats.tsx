import { Timer } from 'lucide-react';

interface TestStatsProps {
  wpm: number;
  accuracy: number;
}

export function TestStats({ wpm, accuracy }: TestStatsProps) {
  return (
    <div className="flex gap-6">
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4" />
        <span className="text-2xl font-mono">{wpm}</span>
        <span className="text-sm text-muted-foreground">WPM</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-mono">{accuracy}%</span>
        <span className="text-sm text-muted-foreground">ACC</span>
      </div>
    </div>
  );
}