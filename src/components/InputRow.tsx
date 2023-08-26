import { INPUT_COLS } from '../constants';

interface InputRowProps {
  active: boolean;
  guesses: string[];
}

const InputRow = ({ active, guesses }: InputRowProps) => {
  return (
    <div className='input-row'>
      {[...new Array(INPUT_COLS)].map((_box, index) => (
        <div key={index} className='input-box'>
          {active ? <p className='input-letter'>{guesses[index]}</p> : null}
        </div>
      ))}
    </div>
  );
};

export default InputRow;
