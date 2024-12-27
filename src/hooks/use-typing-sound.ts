import { useCallback } from 'react';

export function useTypingSound() {
  const playSound = useCallback((file: string, volume: number) => {
    const audio = new Audio(`/sounds/${file}.mp3`);
    audio.volume = volume;
    audio.play().catch(() => {
      // Ignore errors if sound can't play
    });
  }, []);

  const playKeyPress = useCallback(() => {
    playSound('keypress', 0.2);
  }, [playSound]);

  const playError = useCallback(() => {
    playSound('error', 0.3);
  }, [playSound]);

  return { playKeyPress, playError };
}