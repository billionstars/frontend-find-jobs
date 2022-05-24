import React, { createContext, useState } from "react";

import { FaHome, FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const listLinks = [
    {
      id: 1,
      name: "home",
      path: "/home",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "jobs",
      path: "/jobs",
      icon: <MdWork />,
    },
    {
      id: 3,
      name: "login",
      path: "/login",
      icon: <FaUser />,
    },
    {
      id: 4,
      name: "signup",
      path: "/signup",
      icon: <IoIosCreate />,
    },
  ];

  const [listNavLink, setListNavLink] = useState(listLinks);

  const [auth, setAuth] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
    logged: false,
  });

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        listNavLink,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
