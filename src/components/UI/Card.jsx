const Card = (props) => {
  return (
    <div
      className={`bg-white mx-auto px-2 sm:px-5 py-1 rounded-lg w-11/12 sm:w-10/12 md:w-9/12 lg:w-4/6 max-w-5xl ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
