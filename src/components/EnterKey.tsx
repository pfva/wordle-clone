interface EnterKeyProps {
  onClick: () => void;
}

const EnterKey = ({ onClick }: EnterKeyProps) => {
  return (
    <button onClick={onClick} className='keyboard-button keyboard-extra-button'>
      ENTER
    </button>
  );
};

export default EnterKey;
