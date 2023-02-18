import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const { name, description } = props;
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="flex border-b items-baseline justify-between pb-4 m-4">
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <div className=" italic text-sm sm:text-base">{description}</div>
        <div className="text-[#9D4A0A] font-bold">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
