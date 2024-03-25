function Tab({ label, isActive, onClick }) {
  return (
    <button
      className={`focus:outline-none w-[180px] text-start text-lg md:text-2xl pb-2 ${isActive
          ? "md:text-white z-10 border-b-2"
          : "bg-gray-300 text-grayDark border-b-2 md:hover:text-white transition border-transparent"
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Tab;