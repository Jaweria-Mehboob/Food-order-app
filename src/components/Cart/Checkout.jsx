const Checkout = (props) => {
  return (
    <form className="list-none max-h-28 overflow-auto px-4">
      <div className="mb-2">
        <label htmlFor="name" className=" block text-sm font-semibold mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="border border-[#9ca3af] px-1.5 font-light focus:outline-none focus:border-[#7f2607] focus:border-2 py-0.5 text-sm w-full sm:w-7/12 md:w-7/12 lg:w-7/12 rounded-[4px] "
        />
      </div>

      <div className="mb-2">
        <label htmlFor="street" className=" block text-sm font-semibold mb-1">
          Street
        </label>
        <input
          type="text"
          id="street"
          className="border border-[#9ca3af] px-1.5 font-light focus:outline-none focus:border-[#7f2607] focus:border-2 py-0.5 text-sm w-full sm:w-7/12 md:w-7/12 lg:w-7/12 rounded-[4px] "
        />
      </div>

      <div className="mb-2">
        <label htmlFor="postal" className=" block text-sm font-semibold mb-1">
          Postal Code
        </label>
        <input
          type="text"
          id="postal"
          className="border border-[#9ca3af] px-1.5 font-light focus:outline-none focus:border-[#7f2607] focus:border-2 py-0.5 text-sm w-full sm:w-7/12 md:w-7/12 lg:w-7/12 rounded-[4px] "
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className=" block text-sm font-semibold mb-1">
          City
        </label>
        <input
          type="text"
          id="city"
          className="border border-[#9ca3af] px-1.5 font-light focus:outline-none focus:border-[#7f2607] focus:border-2 py-0.5 text-sm w-full sm:w-7/12 md:w-7/12 lg:w-7/12 rounded-[4px] "
        />
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
