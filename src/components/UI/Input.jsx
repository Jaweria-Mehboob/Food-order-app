import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex gap-4 items-center mb-1">
      <label
        htmlFor={props.input.id}
        className="font-medium text-xs sm:text-sm"
      >
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className="w-10 text-xs border rounded-md px-1 sm:text-sm"
      />
    </div>
  );
});

export default Input;
