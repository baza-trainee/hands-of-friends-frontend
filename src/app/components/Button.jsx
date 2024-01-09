import clsx from "clsx";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-purple text-white text-20 border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-solid hover:border-purple hover:text-purple p-4 rounded",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
