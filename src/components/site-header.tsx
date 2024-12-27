import { Button } from '@/components/ui/button';
import { Keyboard } from 'lucide-react';
import { ThemeSwitcher } from './theme-switcher';
import { type View } from '@/lib/types';

interface SiteHeaderProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

export function SiteHeader({ onNavigate, currentView }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-xl mx-auto items-center justify-between px-4">
        <Button 
          variant="ghost" 
          className="flex gap-2 items-center font-semibold"
          onClick={() => onNavigate('landing')}
        >
          <Keyboard className="w-5 h-5" />
          <span>TypeMaster</span>
        </Button>
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li>
              <Button 
                variant={currentView === 'test' ? 'default' : 'ghost'}
                onClick={() => onNavigate('test')}
              >
                Practice
              </Button>
            </li>
            <li>
              <Button 
                variant={currentView === 'leaderboard' ? 'default' : 'ghost'}
                onClick={() => onNavigate('leaderboard')}
              >
                Leaderboard
              </Button>
            </li>
            <li>
              <Button 
                variant={currentView === 'about' ? 'default' : 'ghost'}
                onClick={() => onNavigate('about')}
              >
                About
              </Button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Button variant="ghost">Sign In</Button>
          <Button>Sign Up Free</Button>
        </div>
      </div>
    </header>
  );
}