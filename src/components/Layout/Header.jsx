import React, { Fragment } from "react";

import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="w-full h-16 sm:h-20 sticky top-0 left-0 z-10 flex justify-between items-center shadow-lg text-[#FFF0E9] bg-primary px-4 sm:px-12 md:px-16 lg:px-32">
        <h1 className="text-2xl sm:text-3xl font-bold">ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="w-full h-[25rem] overflow-hidden z-0">
        <img
          src={mealsImg}
          alt="A table covered with delicious meals!"
          className="w-[120%] h-full object-cover -skew-y-6 -translate-y-20"
        />
      </div>
    </Fragment>
  );
};

export default Header;
