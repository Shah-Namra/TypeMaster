import { TestResult } from './types';

export const calculateWPM = (
  correctWords: number,
  timeElapsedMs: number
): number => {
  const timeElapsedMinutes = timeElapsedMs / 1000 / 60;
  return Math.round(correctWords / timeElapsedMinutes || 0);
};

export const calculateAccuracy = (
  correctChars: number,
  totalChars: number
): number => {
  return Math.round((correctChars / totalChars) * 100) || 100;
};

export const checkWordCorrectness = (
  inputWord: string,
  targetWord: string
): boolean => {
  return inputWord === targetWord;
};