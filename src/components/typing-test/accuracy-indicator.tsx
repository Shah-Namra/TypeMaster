import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface AccuracyIndicatorProps {
  accuracy: number;
}

export function AccuracyIndicator({ accuracy }: AccuracyIndicatorProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Accuracy</span>
            <motion.span
              key={accuracy}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium"
            >
              {accuracy}%
            </motion.span>
          </div>
          <Progress value={accuracy} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}