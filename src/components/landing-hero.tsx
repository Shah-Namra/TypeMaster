import { Button } from '@/components/ui/button';
import { Keyboard } from 'lucide-react';
import { TestModes } from './landing/test-modes';
import { Features } from './landing/features';
import { Statistics } from './landing/statistics';
import { Testimonials } from './landing/testimonials';

interface LandingHeroProps {
  onStartTest: () => void;
  onViewLeaderboard: () => void;
}

export function LandingHero({ onStartTest, onViewLeaderboard }: LandingHeroProps) {
  return (
    <div className="space-y-24 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] bg-dot-pattern">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                Master Your Typing Speed
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Improve your typing speed and accuracy with our modern typing test platform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="gap-2 text-lg px-8"
                onClick={onStartTest}
              >
                <Keyboard className="w-5 h-5" />
                Start Typing Test
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={onViewLeaderboard}
              >
                View Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Statistics />
      <Features />
      <TestModes onSelectTest={onStartTest} />
      <Testimonials />
    </div>
  );
}