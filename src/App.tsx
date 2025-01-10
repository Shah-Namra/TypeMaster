import { useState } from 'react';
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

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');

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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader 
        onNavigate={setCurrentView}
        currentView={currentView}
      />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderView()}
      </main>
      <SiteFooter onNavigate={setCurrentView} />
    </div>
  );
}