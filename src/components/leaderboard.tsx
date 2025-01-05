import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardProps {
  onBack: () => void;
}

export function Leaderboard({ onBack }: LeaderboardProps) {
  const leaderboardData = [
    { rank: 1, name: "Sarah K.", wpm: 145, accuracy: 98.5, icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
    { rank: 2, name: "Michael R.", wpm: 138, accuracy: 97.8, icon: <Medal className="w-5 h-5 text-gray-400" /> },
    { rank: 3, name: "David L.", wpm: 132, accuracy: 96.9, icon: <Award className="w-5 h-5 text-amber-700" /> },
    // Random data for display 
  ];

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-3xl font-bold">Global Leaderboard</h1>
      </div>
      
      <div className="space-y-4">
        {leaderboardData.map((entry) => (
          <Card key={entry.rank} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  {entry.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{entry.name}</h3>
                  <p className="text-sm text-muted-foreground">Rank #{entry.rank}</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-right">
                  <p className="font-mono text-xl">{entry.wpm}</p>
                  <p className="text-sm text-muted-foreground">WPM</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xl">{entry.accuracy}%</p>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}