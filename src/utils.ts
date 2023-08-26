import { ColorMap } from './types';

export const getRandomWord = (words: string[]) => {
  return words[Math.floor(Math.random() * words.length)];
};

export const evaluateGuess = (guess: string[], word: string): ColorMap => {
  const letterColorMap = guess.reduce((acc, letter, index) => {
    if (word[index] === letter) {
      return {
        ...acc,
        [index]: 'green',
      };
    }
    if (word.includes(letter) && word[index] !== letter) {
      return {
        ...acc,
        [index]: 'gold',
      };
    }
    return {
      ...acc,
      [index]: '',
    };
  }, {});

  return letterColorMap;
};
