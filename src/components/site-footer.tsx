import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { type View } from "@/lib/types";

interface SiteFooterProps {
  onNavigate: (view: View) => void;
}

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  const footerLinks = [
    { label: 'Privacy', view: 'privacy' as View },
    { label: 'Terms', view: 'terms' as View },
    { label: 'Contact', view: 'contact' as View },
  ];

  return (
    <footer className="border-t mt-24">
      <div className="container max-w-6xl mx-auto flex flex-col gap-4 py-12 px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TypeMaster. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Typescript, Tailwind CSS, and shadcn/ui
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {footerLinks.map(({ label, view }) => (
            <Button 
              key={label}
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate(view)}
            >
              {label}
            </Button>
          ))}
          <a 
            href="https://github.com/Shah-Namra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}