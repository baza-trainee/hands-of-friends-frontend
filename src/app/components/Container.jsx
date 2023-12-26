const Container = (props) => {
  return (
    <div
      className={`container mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
