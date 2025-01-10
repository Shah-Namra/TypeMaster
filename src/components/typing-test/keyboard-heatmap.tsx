import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useKeyPresses } from './keyboard-heatmap/use-key-presses';
import { KEYBOARD_LAYOUT } from './keyboard-heatmap/keyboard-layout';

export function KeyboardHeatmap() {
  const keyPresses = useKeyPresses();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const getHeatIntensity = (count: number) => {
    return Math.min(count * 20, 255);
  };

  const getKeyStyle = (key: string) => {
    const keyPress = keyPresses.find(k => k.key === key);
    const intensity = getHeatIntensity(keyPress?.count || 0);
    const isHovered = hoveredKey === key;
    
    return {
      background: `linear-gradient(135deg, 
        hsl(${intensity}, 70%, 50%) 0%,
        hsl(${intensity}, 70%, 40%) 100%)`,
      transform: isHovered ? 'translateY(-4px)' : 'none',
      boxShadow: isHovered 
        ? `0 8px 16px -4px rgba(0,0,0,0.2), 
           0 0 8px -2px hsl(${intensity}, 70%, 50%)`
        : `0 4px 6px -2px rgba(0,0,0,0.1)`,
    };
  };

  return (
    <Card className="p-6 hidden md:block bg-gradient-to-br from-background to-muted">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Interactive Heatmap</h3>
        <div className="flex gap-2 text-sm">
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-blue-400/20" />
            Low
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            High
          </span>
        </div>
      </div>

      <div className="grid gap-4">
        {KEYBOARD_LAYOUT.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1.5">
            {row.map((key) => {
              const keyPress = keyPresses.find(k => k.key === key.char);
              return (
                <motion.div
                  key={key.char}
                  className="relative group"
                  onHoverStart={() => setHoveredKey(key.char)}
                  onHoverEnd={() => setHoveredKey(null)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div
                    className={`
                      w-12 h-12 rounded-lg flex items-center justify-center
                      font-medium transition-all duration-200
                      ${key.width ? `w-${key.width}` : ''}
                    `}
                    style={getKeyStyle(key.char)}
                  >
                    {key.char}
                  </div>
                  
                  {/* Tooltip */}
                  {keyPress && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-popover text-popover-foreground px-2 py-1 rounded text-sm whitespace-nowrap">
                        {keyPress.count} presses
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </Card>
  );
}