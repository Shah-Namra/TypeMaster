import { type TypingStats } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Timer, Target, AlertTriangle, Zap } from 'lucide-react';

interface StatsDisplayProps {
  stats: TypingStats;
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-500" />
          <div>
            <p className="text-sm text-muted-foreground">WPM</p>
            <p className="text-2xl font-mono">{stats.wpm}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-green-500" />
          <div>
            <p className="text-sm text-muted-foreground">Accuracy</p>
            <p className="text-2xl font-mono">{stats.accuracy}%</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <div>
            <p className="text-sm text-muted-foreground">Mistakes</p>
            <p className="text-2xl font-mono">{stats.mistakes}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 text-blue-500" />
          <div>
            <p className="text-sm text-muted-foreground">Time</p>
            <p className="text-2xl font-mono">{stats.time}s</p>
          </div>
        </div>
      </Card>
    </div>
  );
}