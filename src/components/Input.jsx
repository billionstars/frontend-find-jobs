import React from "react";

const Input = ({ inputTitle, inputType, inputRef, inputPlaceholder }) => {
  return (
    <label className="w-full text-white">
      <span>{inputTitle}:</span>
      <input
        type={inputType}
        ref={inputRef}
        className="w-full p-2 mb-2 rounded-lg text-black/70"
        placeholder={inputPlaceholder}
      />
    </label>
  );
};

export { Input };
