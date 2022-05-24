import React from "react";
import { Link } from "react-router-dom";

const LinkNavBar = ({ linkTo, linkTitle }) => {
  return (
    <Link
      to={linkTo}
      className="mx-2 px-6 py-2 bg-lila text-azul hover:bg-rosa hover:text-white transition-all duration-200 rounded-md"
    >
      {linkTitle}
    </Link>
  );
};

export { LinkNavBar };
