import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
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

  const modalActions = (
    <div className="flex gap-2 justify-end mb-2 pr-2.5">
      <button onClick={onHideCart} className="btn-1">
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className="btn-2">
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal
      onHideCart={onHideCart}
      className="fixed top-20 z-30 bg-white left-1/2 mx-auto py-1 pb-4 drop-shadow-xl rounded-lg animate-slidedown max-w-2xl w-9/12 sm:w-7/12 md:w-6/12 lg:w-5/12"
    >
      {cartItems}
      <div className="flex justify-between my-3.5 ">
        <div className="font-bold text-lg pl-4">Total Amount</div>
        <div className="font-bold pr-3">{totalAmount}</div>
      </div>
      {isCheckout && <Checkout onCancel={onHideCart} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
