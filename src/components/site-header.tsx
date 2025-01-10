import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Keyboard } from 'lucide-react';
import { ThemeSwitcher } from './theme-switcher';
import { MobileNav } from './site-header/mobile-nav';
import { DesktopNav } from './site-header/desktop-nav';
import { type View } from '@/lib/types';
import { motion } from 'framer-motion';

interface SiteHeaderProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

export function SiteHeader({ onNavigate, currentView }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Button 
            variant="ghost" 
            className="flex gap-3 items-center font-semibold group"
            onClick={() => onNavigate('landing')}
          >
            <Keyboard className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="text-lg">TypeMaster</span>
          </Button>

          <DesktopNav currentView={currentView} onNavigate={onNavigate} />

          <div className="hidden md:flex items-center gap-8">
            <ThemeSwitcher />
            <Button variant="ghost" className="px-6">Sign In</Button>
            <Button className="px-6">Sign Up Free</Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <MobileNav
              currentView={currentView}
              onNavigate={onNavigate}
              isOpen={isOpen}
              onOpenChange={setIsOpen}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}