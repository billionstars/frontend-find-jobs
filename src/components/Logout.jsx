import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

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
    <button
      className="px-6 py-2 mx-2 bg-lila/40 text-white hover:bg-rosa/90 transition-all duration-200 rounded-md"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
