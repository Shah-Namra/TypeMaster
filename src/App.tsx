import { useState, useEffect } from 'react';
import { SiteHeader } from '@/components/site-header';
import { LandingHero } from '@/components/landing-hero';
import { TypingTest } from '@/components/typing-test';
import { Leaderboard } from '@/components/leaderboard';
import { About } from '@/components/about';
import { ContactPage } from '@/components/contact-page';
import { PrivacyPage } from '@/components/legal/privacy-page';
import { TermsPage } from '@/components/legal/terms-page';
import { SiteFooter } from '@/components/site-footer';
import { type View } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

// A subtle gradient background component that adds depth
const GradientBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
    <div className="absolute inset-0 bg-dot-pattern" />
  </div>
);

// A subtle floating particles effect
const FloatingParticles = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/10"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          y: [null, Math.random() * 100 - 50],
          x: [null, Math.random() * 100 - 50],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'test':
        return <TypingTest onBack={() => setCurrentView('landing')} />;
      case 'leaderboard':
        return <Leaderboard onBack={() => setCurrentView('landing')} />;
      case 'about':
        return <About onBack={() => setCurrentView('landing')} />;
      case 'contact':
        return <ContactPage onBack={() => setCurrentView('about')} />;
      case 'privacy':
        return <PrivacyPage onBack={() => setCurrentView('landing')} />;
      case 'terms':
        return <TermsPage onBack={() => setCurrentView('landing')} />;
      default:
        return (
          <LandingHero 
            onStartTest={() => setCurrentView('test')} 
            onViewLeaderboard={() => setCurrentView('leaderboard')}
          />
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <GradientBackground />
      <FloatingParticles />
      
      <SiteHeader 
        onNavigate={setCurrentView}
        currentView={currentView}
      />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <SiteFooter onNavigate={setCurrentView} />
    </div>
  );
}