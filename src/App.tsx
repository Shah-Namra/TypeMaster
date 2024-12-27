import { useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { LandingHero } from '@/components/landing-hero';
import { TypingTest } from '@/components/typing-test';
import { Leaderboard } from '@/components/leaderboard';
import { About } from '@/components/about';
import { SiteFooter } from '@/components/site-footer';
import { type View } from '@/lib/types';

export function App() {
  const [currentView, setCurrentView] = useState<View>('landing');

  const renderView = () => {
    switch (currentView) {
      case 'test':
        return <TypingTest onBack={() => setCurrentView('landing')} />;
      case 'leaderboard':
        return <Leaderboard onBack={() => setCurrentView('landing')} />;
      case 'about':
        return <About onBack={() => setCurrentView('landing')} />;
      default:
        return (
          <LandingHero 
            onStartTest={() => setCurrentView('test')} 
            onViewLeaderboard={() => setCurrentView('leaderboard')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader 
        onNavigate={setCurrentView}
        currentView={currentView}
      />
      <main className="flex-1">{renderView()}</main>
      <SiteFooter />
    </div>
  );
}

export default App;