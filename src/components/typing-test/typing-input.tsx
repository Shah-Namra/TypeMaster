import { useRef, useEffect, useCallback } from 'react';
import { Keyboard } from 'lucide-react';
import { useTypingSound } from '@/hooks/use-typing-sound';

interface TypingInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  onComplete?: () => void;
  onFirstType?: () => void;
  className?: string;
}

export function TypingInput({ 
  value, 
  onChange, 
  disabled, 
  onComplete,
  onFirstType,
  className = "" 
}: TypingInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasTypedRef = useRef(false);
  const { playKeyPress } = useTypingSound();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!hasTypedRef.current && onFirstType) {
      onFirstType();
      hasTypedRef.current = true;
    }
    playKeyPress();
    onChange(e.target.value);
  }, [onChange, onFirstType, playKeyPress]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onComplete) {
      onComplete();
    }
  }, [onComplete]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`w-full p-4 pr-12 bg-muted rounded-md font-mono text-xl focus:outline-none focus:ring-2 focus:ring-primary transition-shadow ${className}`}
        placeholder="Start typing..."
        disabled={disabled}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <Keyboard className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
    </div>
  );
}