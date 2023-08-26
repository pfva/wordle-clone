import { INPUT_COLS } from '../constants';

const InputRow = () => {
  return (
    <div className='input-row'>
      {[...new Array(INPUT_COLS)].map((_box, index) => (
        <div key={index} className='input-box'></div>
      ))}
    </div>
  );
};

export default InputRow;
