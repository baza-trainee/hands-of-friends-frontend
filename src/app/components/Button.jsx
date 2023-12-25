const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple hover:bg-vividBlue text-white p-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
