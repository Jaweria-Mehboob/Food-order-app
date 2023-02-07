import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="list-none max-h-80 overflow-auto ">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={() => addItemHandler(item)}
          onRemove={() => removeItemHandler(item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal
      onHideCart={onHideCart}
      className="fixed top-40 z-30 bg-white left-1/2 mx-auto py-1 drop-shadow-xl rounded-lg animate-slidedown w-9/12 sm:w-7/12 md:w-6/12 lg:w-5/12"
    >
      {cartItems}
      <div className="flex justify-between my-4 ">
        <div className="font-bold pl-4">Total Amount</div>
        <div className="font-bold pr-2.5">{totalAmount}</div>
      </div>
      <div className="flex gap-2 justify-end mb-2 pr-2.5">
        <button
          onClick={onHideCart}
          className="bg-white text-sm text-primary border border-primary py-1.5 px-6 rounded-full active:bg-[#641e03] hover:bg-[#641e03] hover:text-white"
        >
          Close
        </button>
        {hasItems && (
          <button className="bg-primary text-sm text-white py-1.5 px-6 rounded-full border border-primary  active:bg-[#641e03] hover:bg-[#641e03]">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
