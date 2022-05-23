import React from "react";

const Select = ({ selectTitle, selectRef, selectValues }) => {
  return (
    <label className="w-full text-white">
      <span>{selectTitle}: </span>
      <select
        ref={selectRef}
        className="w-full p-2 mb-2 rounded-lg text-black/70"
      >
        {selectValues.map((value) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export { Select };
