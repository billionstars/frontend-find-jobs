import React, { useContext } from "react";
import images from "../assets/images";
import { LinkNavBar } from "./LinkNavBar";
import { AuthContext } from "../context/AuthContext";
import { Logout } from "./Logout";

const Navbar = () => {
  const { listNavLink, auth } = useContext(AuthContext);
  return (
    <nav className="hidden w-full h-auto bg-azul/80 text-white fixed z-10 lg:flex shadow-lg">
      <div className="container mx-auto p-2 flex justify-end">
        <div className="w-full">
          <img
            className="w-36"
            src={images.logo[0].img}
            alt={images.logo[0].alt}
          />
        </div>
        <div className="w-full flex justify-end items-center">
          <LinkNavBar
            linkTo={listNavLink[0].path}
            linkTitle={listNavLink[0].name}
          />

          <LinkNavBar
            linkTo={listNavLink[1].path}
            linkTitle={listNavLink[1].name}
          />

          {!auth.logged && (
            <LinkNavBar
              linkTo={listNavLink[2].path}
              linkTitle={listNavLink[2].name}
            />
          )}
          {!auth.logged && (
            <LinkNavBar
              linkTo={listNavLink[3].path}
              linkTitle={listNavLink[3].name}
            />
          )}
          {auth.logged && (
            <LinkNavBar linkTo={`/user/${auth.id}`} linkTitle={auth.name} />
          )}
          {auth.logged && <Logout />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
