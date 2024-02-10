function Tab({ label, isActive, onClick }) {
  return (
    <button
      className={`focus:outline-none w-[180px] text-start text-2xl pb-2 ${
        isActive
          ? "text-white z-10 border-b-2"
          : "bg-gray-300 text-fontGray border-b-2 hover:text-white transition border-transparent"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Tab;
