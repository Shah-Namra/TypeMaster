import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
}

export function PrivacyPage({ onBack }: PrivacyPageProps) {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Lock className="w-5 h-5 mt-1 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect minimal data necessary to provide our typing test services. This includes:
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>• Typing speed and accuracy metrics</li>
                <li>• Test completion statistics</li>
                <li>• Account information (for registered users)</li>
                <li>• Basic usage analytics</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Eye className="w-5 h-5 mt-1 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Data Usage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data is used exclusively to:
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>• Provide personalized typing statistics</li>
                <li>• Improve our services and user experience</li>
                <li>• Generate anonymous usage analytics</li>
                <li>• Maintain leaderboard rankings</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <UserCheck className="w-5 h-5 mt-1 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>• Access your personal data</li>
                <li>• Request data deletion</li>
                <li>• Opt-out of analytics</li>
                <li>• Export your data</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}