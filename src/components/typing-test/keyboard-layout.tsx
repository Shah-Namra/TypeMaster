import { useEffect, useState } from 'react';
import { type KeyboardKey } from '@/lib/types';

export function KeyboardLayout() {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setActiveKeys(prev => new Set([...prev, e.code]));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setActiveKeys(prev => {
        const next = new Set(prev);
        next.delete(e.code);
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="p-4 bg-muted rounded-lg">
      <div className="grid grid-cols-12 gap-1 max-w-4xl mx-auto">
        {keyboardLayout.map((row, i) => (
          <div key={i} className="col-span-12 flex gap-1 justify-center">
            {row.map((key) => (
              <div
                key={key.code}
                className={`
                  h-10 min-w-[2.5rem] rounded flex items-center justify-center
                  ${activeKeys.has(key.code) 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background text-foreground'}
                `}
              >
                {key.key}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const keyboardLayout = [
  // Define keyboard layout...
  [
    { key: 'Q', code: 'KeyQ' },
    { key: 'W', code: 'KeyW' },
    // Add more keys...
  ],
  // more rows needed
];