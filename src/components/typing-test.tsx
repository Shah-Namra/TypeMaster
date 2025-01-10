import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RefreshCcw } from 'lucide-react';
import { PracticeModes } from './typing-test/practice-modes';
import { KeyboardHeatmap } from './typing-test/keyboard-heatmap';
import { SpeedGraph } from './typing-test/speed-graph';
import { AccuracyIndicator } from './typing-test/accuracy-indicator';
import { TypingInput } from './typing-test/typing-input';
import { TextDisplay } from './typing-test/text-display';
import { TestTimer } from './typing-test/test-timer';
import { getTestContent } from '@/lib/test-content';
import type { TestState } from '@/lib/types';

interface TypingTestProps {
  onBack: () => void;
}

const initialTestState: TestState = {
  startTime: null,
  endTime: null,
  currentInput: '',
  isComplete: false,
  mistakes: 0,
  wpm: 0,
  accuracy: 100,
};

export function TypingTest({ onBack }: TypingTestProps) {
  const [text, setText] = useState('');
  const [testState, setTestState] = useState<TestState>(initialTestState);
  const [duration, setDuration] = useState<number | null>(null);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleModeSelect = (mode: string, option: string) => {
    const content = getTestContent(mode, option);
    setText(content.text);
    setDuration(content.duration || null);
    setTestState(initialTestState);
    setIsTimerActive(false);
  };

  const handleInput = (value: string) => {
    if (testState.isComplete) return;

    // Start timer on first input
    if (!testState.startTime) {
      setTestState(prev => ({
        ...prev,
        startTime: Date.now()
      }));
      setIsTimerActive(true);
    }

    // Calculate accuracy
    const mistakes = value.split('').reduce((count, char, i) => 
      count + (char !== text[i] ? 1 : 0), 0);

    // Calculate WPM
    const timeElapsed = (Date.now() - (testState.startTime || Date.now())) / 1000 / 60;
    const wordsTyped = value.length / 5;
    const wpm = Math.round(wordsTyped / timeElapsed);

    setTestState(prev => ({
      ...prev,
      currentInput: value,
      mistakes,
      wpm: wpm || 0,
      accuracy: Math.round(((value.length - mistakes) / value.length) * 100) || 100,
      isComplete: value.length === text.length
    }));
  };

  const handleComplete = () => {
    setTestState(prev => ({
      ...prev,
      endTime: Date.now(),
      isComplete: true
    }));
    setIsTimerActive(false);
  };

  const resetTest = () => {
    setText('');
    setTestState(initialTestState);
    setDuration(null);
    setIsTimerActive(false);
  };

  return (
    <div className="container max-w-6xl mx-auto py-4 md:py-8 px-4 space-y-6 md:space-y-8">
      {!text ? (
        <PracticeModes onSelectMode={handleModeSelect} onBack={onBack} />
      ) : (
        <div className="space-y-6 md:space-y-8">
          <div className="flex justify-between items-center">
            <Button variant="ghost" size="icon" onClick={resetTest}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={resetTest}>
              <RefreshCcw className="w-4 h-4" />
            </Button>
          </div>

          {duration && (
            <TestTimer 
              duration={duration} 
              isActive={isTimerActive}
              onComplete={handleComplete}
            />
          )}
          
          <TextDisplay text={text} input={testState.currentInput} />
          
          <TypingInput 
            value={testState.currentInput} 
            onChange={handleInput}
            disabled={testState.isComplete}
            onComplete={handleComplete}
            className="shadow-lg"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <AccuracyIndicator accuracy={testState.accuracy} />
            <SpeedGraph wpm={testState.wpm} />
          </div>
          
          {!isMobile && <KeyboardHeatmap />}
        </div>
      )}
    </div>
  );
}