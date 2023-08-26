import { firstKeyboardRow, secondKeyboardRow, thirdKeyboardRowWithExtraKeys } from '../constants';
import DeleteKey from './DeleteKey';
import EnterKey from './EnterKey';

const Keyboard = () => {
  return (
    <div className='keyboard'>
      {[firstKeyboardRow, secondKeyboardRow, thirdKeyboardRowWithExtraKeys].map((row, index) => (
        <div key={index} className='keyboard-row'>
          {row.map((letter, index) => {
            if (letter === 'Enter') {
              return <EnterKey key={index} />;
            }
            if (letter === 'Delete') {
              return <DeleteKey key={index} />;
            }
            return (
              <button key={index} className='keyboard-button'>
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
