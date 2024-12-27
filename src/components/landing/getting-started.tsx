import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Keyboard, Target, Trophy, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Take a Test',
    description: 'Start with a quick typing test to assess your current speed and accuracy.',
    icon: <Keyboard className="w-6 h-6" />,
  },
  {
    title: 'Track Progress',
    description: 'Monitor your improvements with detailed statistics and analytics.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Compete',
    description: 'Join competitions and climb the global leaderboard.',
    icon: <Trophy className="w-6 h-6" />,
  },
];

export function GettingStarted() {
  return (
    <div className="container px-4 mx-auto py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
        <p className="text-muted-foreground">Three simple steps to improve your typing</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                {step.icon}
              </div>
            </CardHeader>
            <CardContent className="relative">
              <CardTitle className="mb-2">{step.title}</CardTitle>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hidden md:block" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}