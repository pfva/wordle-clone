import { useState } from 'react';
import './App.css';
import InputRow from './components/InputRow';
import Keyboard from './components/Keyboard';
import { INPUT_ROWS } from './constants';

const App = () => {
  const [currentRowGuesses, setCurrentRowGuesses] = useState<string[]>([]);
  const [activeRow, setActiveRow] = useState<number>(0);

  const handleLetterClick = (_event: React.MouseEvent<HTMLButtonElement>, letter: string) => {
    if (currentRowGuesses.length >= 5) {
      return;
    }
    const newGuesses = [...currentRowGuesses, letter];
    setCurrentRowGuesses(newGuesses);
  };

  const handleDeleteClick = () => {
    if (currentRowGuesses.length === 0) {
      return;
    }
    const newGuesses = [...currentRowGuesses];
    newGuesses.pop();
    setCurrentRowGuesses(newGuesses);
  };

  return (
    <>
      {[...new Array(INPUT_ROWS)].map((_row, index) => (
        <InputRow key={index} active={index === activeRow} guesses={currentRowGuesses} />
      ))}
      <Keyboard onClickLetter={handleLetterClick} onClickDelete={handleDeleteClick} />
    </>
  );
};

export default App;
