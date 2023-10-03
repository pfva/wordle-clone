import { useState } from 'react';
import './App.css';
import InputRow from './components/InputRow';
import Keyboard from './components/Keyboard';
import { INPUT_ROWS } from './constants';
import { gameWords } from './gameWords';
import { ColorMap } from './types';
import { evaluateGuess, getRandomWord } from './utils';

const App = () => {
  const [correctWord, setCorrectWord] = useState<string>(getRandomWord(gameWords));
  const [currentRowGuesses, setCurrentRowGuesses] = useState<string[]>([]);
  const [pastRowGuesses, setPastRowGuesses] = useState<string[][]>([]);
  const [rowColorMaps, setRowColorMaps] = useState<ColorMap[]>([]);
  const [activeRow, setActiveRow] = useState<number>(0);

  const handleLetterClick = (_event: React.MouseEvent<HTMLButtonElement>, letter: string) => {
    if (currentRowGuesses.length >= 5 || !/^[A-Z]$/.test(letter)) return;
    const newGuesses = [...currentRowGuesses, letter];
    setCurrentRowGuesses(newGuesses);
  };

  const handleDeleteClick = () => {
    if (currentRowGuesses.length === 0) return;
    const newGuesses = [...currentRowGuesses];
    newGuesses.pop();
    setCurrentRowGuesses(newGuesses);
  };

  const handleEnterClick = () => {
    if (currentRowGuesses.length !== 5) return;
    const colorMap = evaluateGuess(currentRowGuesses, correctWord);
    const newColorMaps = [...rowColorMaps, colorMap];
    setRowColorMaps(newColorMaps);
    setCurrentRowGuesses([]);
    setPastRowGuesses([...pastRowGuesses, currentRowGuesses]);
    setActiveRow(activeRow + 1);
  };

  return (
    <>
      {[...new Array(INPUT_ROWS)].map((_row, index) => (
        <InputRow
          key={index}
          active={index === activeRow}
          currentGuesses={currentRowGuesses}
          pastGuesses={pastRowGuesses[index]}
          colorMap={rowColorMaps[index]}
        />
      ))}
      <Keyboard onClickLetter={handleLetterClick} onClickDelete={handleDeleteClick} onClickEnter={handleEnterClick} />
    </>
  );
};

export default App;
