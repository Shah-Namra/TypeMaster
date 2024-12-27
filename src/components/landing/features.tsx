import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Timer, Settings, LineChart, Trophy, Users, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Real-time Stats',
    description: 'Track your WPM and accuracy as you type with instant feedback.',
    icon: <Timer className="w-6 h-6" />,
  },
  {
    title: 'Custom Tests',
    description: 'Choose from different test modes and text content to practice.',
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your improvement over time with detailed statistics.',
    icon: <LineChart className="w-6 h-6" />,
  },
  {
    title: 'Global Rankings',
    description: 'Compete with typists worldwide and climb the leaderboard.',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: 'Multiplayer Mode',
    description: 'Race against friends in real-time typing competitions.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Achievements',
    description: 'Earn badges and rewards as you improve your skills.',
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export function Features() {
  return (
    <div className="container px-4 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose TypeMaster?</h2>
        <p className="text-muted-foreground">Everything you need to improve your typing skills</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10" />
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                {feature.icon}
              </div>
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}