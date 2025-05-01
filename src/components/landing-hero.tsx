import { Button } from '@/components/ui/button';
import { Keyboard, ArrowRight, Trophy, Zap, Target, LucideIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PracticeModes } from './landing/test-modes';
import { Features } from './landing/features';
import { Statistics } from './landing/statistics';
import { Testimonials } from './landing/testimonials';

interface LandingHeroProps {
  onStartTest: () => void;
  onViewLeaderboard: () => void;
}

interface FloatingElementProps {
  icon: LucideIcon;
  delay?: number;
  className?: string;
}

// A decorative floating element component
const FloatingElement = ({ icon: Icon, delay = 0, className = '' }: FloatingElementProps) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    }}
  >
    <Icon className="w-6 h-6 text-primary/20" />
  </motion.div>
);

export function LandingHero({ onStartTest, onViewLeaderboard }: LandingHeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleModeSelect = (mode: string, option: string) => {
    console.log(`Selected mode: ${mode}, option: ${option}`);
    onStartTest();
  };

  return (
    <div className="space-y-24" ref={containerRef}>
      {/* Hero Section with enhanced visual effects */}
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y }}
        >
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(115, 115, 115, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(115, 115, 115, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 70%, transparent 100%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </motion.div>

        {/* Floating decorative elements */}
        <FloatingElement icon={Keyboard} delay={0.2} className="top-1/4 left-1/4" />
        <FloatingElement icon={Trophy} delay={0.4} className="top-1/3 right-1/4" />
        <FloatingElement icon={Zap} delay={0.6} className="bottom-1/4 left-1/3" />
        <FloatingElement icon={Target} delay={0.8} className="bottom-1/3 right-1/3" />

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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50 animate-gradient">
                  Typing Speed
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Improve your typing speed and accuracy with our modern, interactive typing tests.
                Join thousands of users who have enhanced their productivity.
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

                className="group text-lg px-8 glass hover:scale-105 transition-all duration-300"
                onClick={onStartTest}
              >
                <Keyboard className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Typing Test
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-lg px-8 glass hover:scale-105 transition-all duration-300"
                onClick={onViewLeaderboard}
              >
                View Leaderboard
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced sections with smooth transitions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Statistics />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Features />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <PracticeModes onSelectMode={handleModeSelect} onBack={() => { }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Testimonials />
      </motion.div>
    </div>
  );
}