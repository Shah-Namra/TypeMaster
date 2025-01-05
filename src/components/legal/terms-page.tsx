import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ScrollText, FileText, AlertCircle, Scale } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

export function TermsPage({ onBack }: TermsPageProps) {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-2">
          <ScrollText className="w-6 h-6 text-primary" />
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <FileText className="w-5 h-5 mt-1 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Usage Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using TypeMaster, you agree to:
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>• Use the service for its intended purpose</li>
                <li>• Not attempt to manipulate scores or rankings</li>
                <li>• Respect other users and their privacy</li>
                <li>• Maintain the integrity of the platform</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-5 h-5 mt-1 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                TypeMaster reserves the right to:
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>• Modify or discontinue services</li>
                <li>• Remove content or users</li>
                <li>• Update these terms</li>
                <li>• Limit access to features</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Scale className="w-5 h-5 mt-1 text-primary" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Legal Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users must comply with:
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>• Applicable laws and regulations</li>
                <li>• Community guidelines</li>
                <li>• Data protection requirements</li>
                <li>• Intellectual property rights</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}