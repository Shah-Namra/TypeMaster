import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface KeyPress {
  key: string;
  count: number;
}

export function KeyboardHeatmap() {
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

  const getHeatColor = (count: number) => {
    const intensity = Math.min(count * 20, 255);
    return `rgb(${intensity}, 100, 100)`;
  };

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-2">Keyboard Heatmap</h3>
      <div className="grid grid-cols-10 gap-1">
        {keyPresses.map(({ key, count }) => (
          <div
            key={key}
            className="aspect-square rounded flex items-center justify-center text-xs"
            style={{ backgroundColor: getHeatColor(count) }}
          >
            {key}
          </div>
        ))}
      </div>
    </Card>
  );
}