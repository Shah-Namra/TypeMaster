import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Book, Timer, Keyboard, ArrowLeft } from 'lucide-react';

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
  },
  {
    id: 'word',
    title: 'Word Mode',
    description: 'Practice with word sets',
    icon: <Keyboard className="w-5 h-5" />,
    options: ['10', '25', '50', '100']
  }
];

export function PracticeModes({ onSelectMode, onBack }: PracticeModesProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 px-4 md:px-0">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h2 className="text-xl md:text-2xl font-bold">Choose Your Practice Mode</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
        {modes.map((mode) => (
          <Card 
            key={mode.id} 
            className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border border-border/50"
          >
            <CardHeader className="p-4 md:p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  {mode.icon}
                </div>
                <div>
                  <CardTitle className="text-lg md:text-xl">{mode.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{mode.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <div className="grid grid-cols-2 gap-2">
                {mode.options.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    onClick={() => onSelectMode(mode.id, option)}
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors text-sm md:text-base"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}