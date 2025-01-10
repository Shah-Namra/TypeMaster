import { useState, useEffect } from 'react';

export interface KeyPress {
  key: string;
  count: number;
}

export function useKeyPresses() {
  const [keyPresses, setKeyPresses] = useState<KeyPress[]>([]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKeyPresses(prev => {
        const existing = prev.find(k => k.key === e.key);
        if (existing) {
          return prev.map(k => 
            k.key === e.key ? { ...k, count: k.count + 1 } : k
          );
        }
        return [...prev, { key: e.key, count: 1 }];
      });
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return keyPresses;
}