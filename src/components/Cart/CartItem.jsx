const CartItem = (props) => {
  const { name, amount, onAdd, onRemove } = props;
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="flex justify-between items-center border-b-2 border-solid mx-4 border-[#8a2b06] ">
      <div>
        <h2 className="font-bold mt-7 mb-3">{name}</h2>
        <div className="flex gap-10 items-center text-xs font-bold mb-2.5">
          <span className="text-primary">{price}</span>
          <span className="border py-1 px-2.5 rounded">x {amount}</span>
        </div>
      </div>
      <div className="text-primary mt-5 mr-1">
        <button
          onClick={onRemove}
          className=" border border-[#d3b6ac] font-bold px-4 py-0.5 rounded hover:text-white hover:bg-[#641e03] mr-2"
        >
          -
        </button>
        <button
          onClick={onAdd}
          className="border border-[#D1BCB5] font-bold px-4 py-0.5 rounded hover:text-white hover:bg-[#641e03]"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
