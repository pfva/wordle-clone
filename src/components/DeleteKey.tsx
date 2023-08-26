interface DeleteKeyProps {
  onClick: () => void;
}

const DeleteKey = ({ onClick }: DeleteKeyProps) => {
  return (
    <button onClick={onClick} className='keyboard-extra-button'>
      ←
    </button>
  );
};

export default DeleteKey;
