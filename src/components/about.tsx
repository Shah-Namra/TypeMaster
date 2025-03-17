import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Heart, Github, Twitter, MessageCircle } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

export function About({ onBack }: AboutProps) {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-3xl font-bold">About TypeMaster</h1>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            TypeMaster is dedicated to helping people improve their typing skills through an engaging and modern platform. 
            We believe that efficient typing is a fundamental skill in today's digital world.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Real-time WPM and accuracy tracking</li>
              <li>• Multiple test modes and difficulties</li>
              <li>• Progress tracking and statistics</li>
              <li>• Global leaderboard</li>
              <li>• Custom text support</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
            <div className="space-y-4">
              <a 
                href="https://github.com/Shah-Namra"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </a>
              <a 
                href="https://x.com/namra_Shah_/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
              >
                <MessageCircle className="w-4 h-4" />
                Contact Us
              </Button>
              <a 
                href="https://github.com/Shah-Namra/TypeMaster"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Heart className="w-4 h-4" />
                  Support Us
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}