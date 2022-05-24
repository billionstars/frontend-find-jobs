import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Logout } from "../components/Logout";

const BottomNav = () => {
  const { listNavLink, auth } = useContext(AuthContext);

  return (
    <>
      <div className="w-full bg-azul text-white p-2 fixed left-0 bottom-0 shadow-md flex justify-center items-center lg:hidden">
        <div className="w-full flex justify-center items-center">
          <div className="p-2 flex justify-center items-center mx-2">
            <Link
              to={listNavLink[0].path}
              className="text-4xl hover:text-rosa/80 transition-all duration-300"
            >
              {listNavLink[0].icon}
            </Link>
          </div>
          <div className="p-2 flex justify-center items-center mx-2">
            <Link
              to={listNavLink[1].path}
              className="text-4xl hover:text-rosa/80 transition-all duration-300"
            >
              {listNavLink[1].icon}
            </Link>
          </div>
          {!auth.logged && (
            <div className="p-2 flex justify-center items-center mx-2">
              <Link
                to={listNavLink[2].path}
                className="text-4xl hover:text-rosa/80 transition-all duration-300"
              >
                {listNavLink[2].icon}
              </Link>
            </div>
          )}
          {!auth.logged && (
            <div className="p-2 flex justify-center items-center mx-2">
              <Link
                to={listNavLink[3].path}
                className="text-4xl hover:text-rosa/80 transition-all duration-300"
              >
                {listNavLink[3].icon}
              </Link>
            </div>
          )}

          {auth.logged && <Link to={`/user/${auth.id}`}>{auth.name}</Link>}
          {auth.logged && <Logout />}
        </div>
      </div>
    </>
  );
};

export default BottomNav;
