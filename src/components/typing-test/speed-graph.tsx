import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Target } from 'lucide-react';

interface SpeedDataPoint {
  time: number;
  wpm: number;
}

interface SpeedGraphProps {
  wpm: number;
}

const axisStyle = {
  fontSize: 12,
  stroke: 'hsl(var(--muted-foreground))',
};

// A decorative gradient component for the chart background
const ChartGradient = () => (
  <defs>
    <linearGradient id="speedGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
    </linearGradient>
  </defs>
);

// A custom tooltip component with animations
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass px-3 py-2 rounded-lg shadow-lg"
      >
        <p className="text-sm font-medium">
          <span className="text-muted-foreground">Time: </span>
          {label}s
        </p>
        <p className="text-sm font-medium">
          <span className="text-muted-foreground">Speed: </span>
          {payload[0].value} WPM
        </p>
      </motion.div>
    );
  }
  return null;
};

export function SpeedGraph({ wpm }: SpeedGraphProps) {
  const [speedData, setSpeedData] = useState<SpeedDataPoint[]>([]);
  const [peakWpm, setPeakWpm] = useState(0);

  useEffect(() => {
    if (wpm > 0) {
      setSpeedData(prev => {
        const newData = [...prev, {
          time: prev.length * 5,
          wpm
        }].slice(-20);
        setPeakWpm(Math.max(...newData.map(d => d.wpm), peakWpm));
        return newData;
      });
    }
  }, [wpm]);

  return (
    <Card className="p-6 bg-gradient-to-br from-background to-muted">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Speed Over Time</h3>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Current: {wpm} WPM</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            <span>Peak: {peakWpm} WPM</span>
          </div>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={speedData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <ChartGradient />
            <XAxis
              dataKey="time"
              stroke={axisStyle.stroke}
              fontSize={axisStyle.fontSize}
              label={{ 
                value: "Time (s)", 
                position: "bottom",
                style: axisStyle
              }}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              stroke={axisStyle.stroke}
              fontSize={axisStyle.fontSize}
              label={{ 
                value: "WPM", 
                angle: -90, 
                position: "left",
                style: axisStyle
              }}
              padding={{ top: 10, bottom: 0 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="wpm"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="url(#speedGradient)"
              fillOpacity={1}
            />
            <Line
              type="monotone"
              dataKey="wpm"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
              activeDot={{ 
                r: 4,
                fill: "hsl(var(--primary))",
                stroke: "hsl(var(--background))",
                strokeWidth: 2
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}