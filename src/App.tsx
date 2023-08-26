import './App.css';
import InputRow from './components/InputRow';
import Keyboard from './components/Keyboard';
import { INPUT_ROWS } from './constants';

function App() {
  return (
    <>
      {[...new Array(INPUT_ROWS)].map((_row, index) => (
        <InputRow key={index} />
      ))}
      <Keyboard />
    </>
  );
}

export default App;
