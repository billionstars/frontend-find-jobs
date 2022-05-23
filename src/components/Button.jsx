import React from "react";

const Button = ({ textButton }) => {
  return (
    <button className="bg-rosa text-white px-6 py-2 rounded-md hover:bg-rosa/80 hover:shadow-lg">
      {textButton}
    </button>
  );
};

export { Button };
