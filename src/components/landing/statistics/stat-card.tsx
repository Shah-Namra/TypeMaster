import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { Counter } from './counter';

interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
  description: string;
}

export function StatCard({ label, value, suffix, icon: Icon, description }: StatCardProps) {
  return (
    <Card className="relative overflow-hidden hover:scale-105 transition-transform">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-3xl font-bold">
              <Counter end={value} suffix={suffix} />
            </p>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}