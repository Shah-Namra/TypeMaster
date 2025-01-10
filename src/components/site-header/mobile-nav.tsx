import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { type View } from '@/lib/types';

interface MobileNavProps {
  currentView: View;
  onNavigate: (view: View) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ currentView, onNavigate, isOpen, onOpenChange }: MobileNavProps) {
  const handleNavigate = (view: View) => {
    onNavigate(view);
    onOpenChange(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Button 
            variant={currentView === 'test' ? 'default' : 'ghost'}
            onClick={() => handleNavigate('test')}
            className="w-full justify-start"
          >
            Practice
          </Button>
          <Button 
            variant={currentView === 'leaderboard' ? 'default' : 'ghost'}
            onClick={() => handleNavigate('leaderboard')}
            className="w-full justify-start"
          >
            Leaderboard
          </Button>
          <Button 
            variant={currentView === 'about' ? 'default' : 'ghost'}
            onClick={() => handleNavigate('about')}
            className="w-full justify-start"
          >
            About
          </Button>
          <hr className="my-4" />
          <Button variant="ghost" className="w-full justify-start">Sign In</Button>
          <Button className="w-full justify-start">Sign Up Free</Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}