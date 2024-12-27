// Add to existing types
export interface TestConfig {
  mode: 'words' | 'time' | 'code' | 'quote';
  value: string;
  duration?: number;
}

export interface TestState {
  startTime: number | null;
  endTime: number | null;
  currentInput: string;
  isComplete: boolean;
  mistakes: number;
  wpm: number;
  accuracy: number;
}