import { Users, Trophy, Timer, Target } from 'lucide-react';
import { StatCard } from './statistics/stat-card';

const stats = [
  {
    label: 'Active Users',
    value: 50000,
    suffix: '+',
    icon: Users,
    description: 'Practicing Daily',
  },
  {
    label: 'Tests Completed',
    value: 1000000,
    suffix: '+',
    icon: Trophy,
    description: 'And Counting',
  },
  {
    label: 'Avg. Speed',
    value: 65,
    suffix: ' WPM',
    icon: Timer,
    description: 'Community Average',
  },
  {
    label: 'Accuracy Rate',
    value: 96,
    suffix: '%',
    icon: Target,
    description: 'Community Average',
  },
];

export function Statistics() {
  return (
    <div className="container px-4 mx-auto py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}