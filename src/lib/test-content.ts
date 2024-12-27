import { codeSnippets } from './code-snippets';
import { generateWords } from './words';

const textSamples = {
  Short: "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",
  Medium: "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! The five boxing wizards jump quickly. Sphinx of black quartz, judge my vow.",
  Long: "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! The five boxing wizards jump quickly. Sphinx of black quartz, judge my vow. Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz.",
  Custom: "The quick brown fox jumps over the lazy dog."
};

function parseTimeOption(option: string): number {
  const value = parseInt(option);
  if (option.endsWith('s')) return value;
  if (option.endsWith('m')) return value * 60;
  return value;
}

export function getTestContent(mode: string, option: string): { text: string; duration?: number } {
  switch (mode) {
    case 'text':
      return { text: textSamples[option as keyof typeof textSamples] || textSamples.Short };

    case 'time':
      const seconds = parseTimeOption(option);
      return { 
        text: generateWords(200), // Generate more words than needed
        duration: seconds
      };

    case 'code':
      const language = option.toLowerCase();
      return { 
        text: codeSnippets[language as keyof typeof codeSnippets] || codeSnippets.javascript 
      };

    case 'word':
      const wordCount = parseInt(option);
      return { text: generateWords(wordCount) };

    default:
      return { text: textSamples.Short };
  }
}