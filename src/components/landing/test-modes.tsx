import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TestModesProps {
  onSelectTest: () => void;
}

const testModes = [
  {
    id: 'words',
    title: 'Words Mode',
    description: 'Practice with a set number of words',
    options: ['10 words', '25 words', '50 words', '100 words'],
  },
  {
    id: 'time',
    title: 'Time Mode',
    description: 'Type as many words as you can in a given time',
    options: ['15 seconds', '30 seconds', '60 seconds', '120 seconds'],
  },
  {
    id: 'quote',
    title: 'Quote Mode',
    description: 'Practice with famous quotes and passages',
    options: ['Short', 'Medium', 'Long', 'Custom'],
  },
];

export function TestModes({ onSelectTest }: TestModesProps) {
  const handleTestModeSelect = (mode: string, option: string) => {
    localStorage.setItem('testMode', mode);
    localStorage.setItem('testOption', option);
    onSelectTest();
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Challenge</h2>
        <p className="text-muted-foreground">Multiple test modes to suit your practice needs</p>
      </div>
      <Tabs defaultValue="words" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="words">Words</TabsTrigger>
          <TabsTrigger value="time">Time</TabsTrigger>
          <TabsTrigger value="quote">Quote</TabsTrigger>
        </TabsList>
        {testModes.map((mode) => (
          <TabsContent key={mode.id} value={mode.id} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{mode.title}</CardTitle>
                <CardDescription>{mode.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  {mode.options.map((option, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleTestModeSelect(mode.id, option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}