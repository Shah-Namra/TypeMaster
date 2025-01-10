import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Book, Timer } from 'lucide-react';
import { motion } from 'framer-motion';

interface PracticeModesProps {
  onSelectMode: (mode: string, option: string) => void;
  onBack: () => void;
}

const modes = [
  {
    id: 'text',
    title: 'Text Mode',
    description: 'Practice with paragraphs and quotes',
    icon: <Book className="w-5 h-5" />,
    options: ['Short', 'Medium', 'Long', 'Custom']
  },
  {
    id: 'time',
    title: 'Time Mode',
    description: 'Race against the clock',
    icon: <Timer className="w-5 h-5" />,
    options: ['15s', '30s', '1m', '2m']
  },
  {
    id: 'code',
    title: 'Code Mode',
    description: 'Practice with real code snippets',
    icon: <Code className="w-5 h-5" />,
    options: ['JavaScript', 'TypeScript', 'Python', 'HTML/CSS']
  }
];

export function PracticeModes({ onSelectMode, onBack }: PracticeModesProps) {
  return (
    <div className="max-w-5xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Practice Mode</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select a mode that matches your learning style and goals. Each mode offers unique challenges to help you improve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {modes.map((mode, index) => (
          <motion.div
            key={mode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {mode.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{mode.title}</h3>
                  <p className="text-muted-foreground text-sm">{mode.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {mode.options.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      onClick={() => onSelectMode(mode.id, option)}
                      className="w-full group-hover:border-primary/50 transition-colors"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}