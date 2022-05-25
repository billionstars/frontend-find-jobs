import React, { createContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaHome, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

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
      icon: <FaUserAlt />,
    },
    {
      id: 4,
      name: "signup",
      path: "/signup",
      icon: <IoIosCreate />,
    },
    {
      id: 5,
      name: "profile",
      path: "/user",
      icon: <FaUserCircle />,
    },
    {
      id: 6,
      name: "logout",
      path: "",
      icon: <RiLogoutBoxRFill />,
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth({
      logged: false,
      name: "",
      email: "",
      id: "",
      role: "",
    });
    navigate(`/home`, {
      replace: true,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        listNavLink,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
