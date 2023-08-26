import { INPUT_COLS } from '../constants';
import { ColorMap } from '../types';

interface InputRowProps {
  active: boolean;
  currentGuesses: string[];
  pastGuesses: string[];
  colorMap?: ColorMap;
}

const InputRow = ({ active, currentGuesses, pastGuesses, colorMap }: InputRowProps) => {
  return (
    <div className='input-row'>
      {[...new Array(INPUT_COLS)].map((_box, index) => (
        <div key={index} className='input-box' style={{ backgroundColor: colorMap?.[index] }}>
          {active ? <p className='input-letter'>{currentGuesses[index]}</p> : null}
          {pastGuesses ? <p className='input-letter'>{pastGuesses[index]}</p> : null}
        </div>
      ))}
    </div>
  );
};

export default InputRow;
