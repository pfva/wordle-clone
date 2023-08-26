import { firstKeyboardRow, secondKeyboardRow, thirdKeyboardRowWithExtraKeys } from '../constants';
import DeleteKey from './DeleteKey';
import EnterKey from './EnterKey';

interface KeyboardProps {
  onClickLetter: (event: React.MouseEvent<HTMLButtonElement>, letter: string) => void;
  onClickDelete: () => void;
  onClickEnter: () => void;
}

const Keyboard = ({ onClickLetter, onClickDelete, onClickEnter }: KeyboardProps) => {
  return (
    <div className='keyboard'>
      {[firstKeyboardRow, secondKeyboardRow, thirdKeyboardRowWithExtraKeys].map((row, index) => (
        <div key={index} className='keyboard-row'>
          {row.map((letter, index) => {
            if (letter === 'Enter') {
              return <EnterKey key={index} onClick={onClickEnter} />;
            }
            if (letter === 'Delete') {
              return <DeleteKey key={index} onClick={onClickDelete} />;
            }
            return (
              <button key={index} onClick={event => onClickLetter(event, letter)} className='keyboard-button'>
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
