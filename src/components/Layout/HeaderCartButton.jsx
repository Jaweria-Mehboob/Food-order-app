import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${btnIsHighlighted ? "animate-bump" : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
  }, [items]);

  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center bg-[#451601] font-semibold py-2 px-5 rounded-full hover:bg-[#2c0d00] text-xs sm:text-base sm:gap-3 sm:py-3 sm:px-9 ${btnClasses}`}
    >
      <span>
        <CartIcon />
      </span>
      <span className="">Your Cart</span>
      <span className="bg-primary px-3.5 py-0.5 my-auto rounded-2xl hover:bg-[#92320c]">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
