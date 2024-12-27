import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface SpeedDataPoint {
  time: number;
  wpm: number;
}

interface SpeedGraphProps {
  wpm: number;
}

const defaultAxisProps = {
  stroke: 'hsl(var(--muted-foreground))',
  fontSize: 12,
};

export function SpeedGraph({ wpm }: SpeedGraphProps) {
  const [speedData, setSpeedData] = useState<SpeedDataPoint[]>([]);

  useEffect(() => {
    if (wpm > 0) {
      setSpeedData(prev => [...prev, {
        time: prev.length * 5,
        wpm
      }].slice(-20)); // Keep last 20 points
    }
  }, [wpm]);

  return (
    <Card className="p-4 h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Speed Over Time</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={speedData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <XAxis 
            {...defaultAxisProps}
            dataKey="time"
            label={{ value: "Time (s)", position: "bottom", ...defaultAxisProps }}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis
            {...defaultAxisProps}
            label={{ value: "WPM", angle: -90, position: "left", ...defaultAxisProps }}
            padding={{ top: 10, bottom: 0 }}
          />
          <Tooltip 
            formatter={(value: number) => [`${value} WPM`, "Speed"]}
            labelFormatter={(time: number) => `${time}s`}
            contentStyle={{
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: 'var(--radius)',
            }}
          />
          <Line 
            type="monotone" 
            dataKey="wpm" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}