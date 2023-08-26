import { firstKeyboardRow, secondKeyboardRow, thirdKeyboardRow } from '../../constants';

const Keyboard = () => {
  return (
    <div className='keyboard'>
      <div className='keyboard-row'>
        {firstKeyboardRow.map((letter, index) => (
          <button key={index} className='keyboard-button'>
            {letter}
          </button>
        ))}
      </div>
      <div className='keyboard-row'>
        {secondKeyboardRow.map((letter, index) => (
          <button key={index} className='keyboard-button'>
            {letter}
          </button>
        ))}
      </div>
      <div className='keyboard-row'>
        {thirdKeyboardRow.map((letter, index) => (
          <button key={index} className='keyboard-button'>
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
