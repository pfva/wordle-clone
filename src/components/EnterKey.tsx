interface EnterKeyProps {
  onClick: () => void;
}

const EnterKey = ({ onClick }: EnterKeyProps) => {
  return (
    <button onClick={onClick} className='keyboard-extra-button'>
      Enter
    </button>
  );
};

export default EnterKey;
