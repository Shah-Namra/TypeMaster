import { Github } from "lucide-react";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-8 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            © 2024 TypeMaster. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React, Tailwind CSS, and shadcn/ui
          </p>
        </div>
        <div className="flex gap-4">
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">Privacy</Button>
          </a>
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">Terms</Button>
          </a>
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">Contact</Button>
          </a>
          <a href="https://github.com/shah-namra"  rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </div>

      </div>
    </footer>
  );
}