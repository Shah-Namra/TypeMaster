import { Button } from '@/components/ui/button';
import { type View } from '@/lib/types';

interface DesktopNavProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export function DesktopNav({ currentView, onNavigate }: DesktopNavProps) {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        <li>
          <Button 
            variant={currentView === 'test' ? 'default' : 'ghost'}
            onClick={() => onNavigate('test')}
            className="px-6"
          >
            Practice
          </Button>
        </li>
        <li>
          <Button 
            variant={currentView === 'leaderboard' ? 'default' : 'ghost'}
            onClick={() => onNavigate('leaderboard')}
            className="px-6"
          >
            Leaderboard
          </Button>
        </li>
        <li>
          <Button 
            variant={currentView === 'about' ? 'default' : 'ghost'}
            onClick={() => onNavigate('about')}
            className="px-6"
          >
            About
          </Button>
        </li>
      </ul>
    </nav>
  );
}