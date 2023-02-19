import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeRef = useRef();
  const cityInputRef = useRef();

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = !isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) return;

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const nameClasses = formValidity.name ? "" : "bg-red-100";
  const streetClasses = formValidity.street ? "" : "bg-red-100";
  const postalCodeClasses = formValidity.postalCode ? "" : "bg-red-100";
  const cityClasses = formValidity.city ? "" : "bg-red-100";

  return (
    <form
      onSubmit={confirmHandler}
      className="list-none max-h-72 overflow-auto px-4"
    >
      <div className="mb-2">
        <label htmlFor="name" className=" block text-sm font-semibold mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          className={`border border-[#9ca3af] px-1.5 font-light focus:outline-none focus:border-[#7f2607] focus:border-2 py-0.5 text-sm w-full sm:w-7/12 md:w-7/12 lg:w-7/12 rounded-[4px] ${nameClasses}`}
        />
        {!formValidity.name && (
          <p className="font-light text-red-500 text-xs">
            Please enter a valid name!
          </p>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="street" className=" block text-sm font-semibold mb-1">
          Street
        </label>
        <input
          type="text"
          id="street"
          ref={streetInputRef}
          className={`border border-[#9ca3af] px-1.5 font-light focus:outline-none focus:border-[#7f2607] focus:border-2 py-0.5 text-sm w-full sm:w-7/12 md:w-7/12 lg:w-7/12 rounded-[4px] ${streetClasses}`}
        />
        {!formValidity.street && (
          <p className="font-light text-red-500 text-xs">
            Please enter a valid street!
          </p>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="postal" className=" block text-sm font-semibold mb-1">
          Postal Code
        </label>
        <input
          type="text"
          id="postal"
          ref={postalCodeRef}
          className={`border border-[#9ca3af] px-1.5 font-light focus:outline-none focus:border-[#7f2607] focus:border-2 py-0.5 text-sm w-full sm:w-7/12 md:w-7/12 lg:w-7/12 rounded-[4px] ${postalCodeClasses}`}
        />
        {!formValidity.postalCode && (
          <p className="font-light text-red-500 text-xs">
            Please enter a valid postal code!(5 characters long)
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="city" className=" block text-sm font-semibold mb-1">
          City
        </label>
        <input
          type="text"
          id="city"
          ref={cityInputRef}
          className={`border border-[#9ca3af] px-1.5 font-light focus:outline-none focus:border-[#7f2607] focus:border-2 py-0.5 text-sm w-full sm:w-7/12 md:w-7/12 lg:w-7/12 rounded-[4px] ${cityClasses}`}
        />
        {!formValidity.city && (
          <p className="font-light text-red-500 text-xs">
            Please enter a valid city!
          </p>
        )}
      </div>

      <div className="flex gap-2 justify-end my-3 ">
        <button type="button" onClick={props.onCancel} className="btn-1">
          Cancel
        </button>
        <button className="btn-2">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
