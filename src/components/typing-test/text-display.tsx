import { Card } from '@/components/ui/card';

interface TextDisplayProps {
  text: string;
  input: string;
}

export function TextDisplay({ text, input }: TextDisplayProps) {
  return (
    <Card className="p-8 bg-muted/50">
      <div className="font-mono text-xl leading-relaxed">
        {text.split('').map((char, index) => {
          let color = 'text-muted-foreground';
          if (index < input.length) {
            color = input[index] === char ? 'text-green-500' : 'text-red-500';
          }
          return (
            <span key={index} className={color}>
              {char}
            </span>
          );
        })}
      </div>
    </Card>
  );
}