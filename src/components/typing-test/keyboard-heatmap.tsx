import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyPresses } from './keyboard-heatmap/use-key-presses';
import { KEYBOARD_LAYOUT } from './keyboard-heatmap/keyboard-layout';
import { Activity, Zap, TrendingUp } from 'lucide-react';

// A subtle glow effect component for active keys
const KeyGlow = ({ intensity }: { intensity: number }) => (
  <motion.div
    className="absolute inset-0 rounded-lg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: intensity / 255, scale: 1.2 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
    style={{
      background: `radial-gradient(circle at center, 
        hsl(${intensity}, 70%, 50%) 0%, 
        transparent 70%)`,
    }}
  />
);

// A tooltip component with smooth animations
const KeyTooltip = ({ count, isVisible }: { count: number; isVisible: boolean }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-12 left-1/2 -translate-x-1/2"
      >
        <div className="glass px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg">
          {count} presses
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export function KeyboardHeatmap() {
  const keyPresses = useKeyPresses();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [maxPresses, setMaxPresses] = useState(0);

  // Calculate max presses for relative intensity
  useEffect(() => {
    const max = Math.max(...keyPresses.map(k => k.count), 1);
    setMaxPresses(max);
  }, [keyPresses]);

  const getHeatIntensity = (count: number) => {
    return Math.min((count / maxPresses) * 255, 255);
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
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Interactive Heatmap</h3>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400/20" />
            <span className="text-muted-foreground">Low</span>
          </span>
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-muted-foreground">High</span>
          </span>
        </div>
      </div>

      <div className="grid gap-4">
        {KEYBOARD_LAYOUT.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1.5">
            {row.map((key) => {
              const keyPress = keyPresses.find(k => k.key === key.char);
              const intensity = getHeatIntensity(keyPress?.count || 0);
              const isHovered = hoveredKey === key.char;
              
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
                      font-medium transition-all duration-200 relative
                      ${key.width ? `w-${key.width}` : ''}
                    `}
                    style={getKeyStyle(key.char)}
                  >
                    <KeyGlow intensity={intensity} />
                    <span className="relative z-10 text-foreground/90">
                      {key.char}
                    </span>
                  </div>
                  
                  <KeyTooltip 
                    count={keyPress?.count || 0} 
                    isVisible={isHovered} 
                  />
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Stats summary */}
      <div className="mt-6 flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <span>Total Presses: {keyPresses.reduce((sum, k) => sum + k.count, 0)}</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          <span>Most Used: {keyPresses.reduce((max, k) => k.count > max.count ? k : max, { key: '', count: 0 }).key}</span>
        </div>
      </div>
    </Card>
  );
}