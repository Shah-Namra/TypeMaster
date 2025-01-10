import { Button } from '@/components/ui/button';
import { Keyboard, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PracticeModes } from './landing/test-modes';
import { Features } from './landing/features';
import { Statistics } from './landing/statistics';
import { Testimonials } from './landing/testimonials';

interface LandingHeroProps {
  onStartTest: () => void;
  onViewLeaderboard: () => void;
}

export function LandingHero({ onStartTest, onViewLeaderboard }: LandingHeroProps) {
  const handleModeSelect = (mode: string, option: string) => {
    console.log(`Selected mode: ${mode}, option: ${option}`);
    onStartTest();
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(115, 115, 115, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(115, 115, 115, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 70%, transparent 100%)'
          }}
        />
        
        <div className="container max-w-6xl mx-auto px-8 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Master Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                  Typing Speed
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Improve your typing speed and accuracy with our modern, interactive typing tests
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="group text-lg px-8"
                onClick={onStartTest}
              >
                <Keyboard className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Typing Test
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group text-lg px-8"
                onClick={onViewLeaderboard}
              >
                View Leaderboard
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Statistics />
      <Features />
      <PracticeModes onSelectMode={handleModeSelect} onBack={() => {}} />
      <Testimonials />
    </div>
  );
}