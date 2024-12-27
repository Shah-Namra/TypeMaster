import { useState, useEffect } from 'react';
import { themes } from '@/lib/themes';

export function useTheme() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    const root = document.documentElement;
    const selectedTheme = themes.find((t) => t.name === theme);
    
    if (selectedTheme) {
      Object.entries(selectedTheme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
      });
    }
  }, [theme]);

  return { theme, setTheme };
}