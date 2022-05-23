import React, { useRef, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import { post } from "../api";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

const Access = () => {
  const context = useContext(AuthContext);

  const [error, setError] = useState({
    isError: false,
    message: "",
    loading: false,
    code: 0,
  });

  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  const login = (event) => {
    event.preventDefault();

    post("/api/auth/login", {
      email: email.current.value,
      password: password.current.value,
    })
      .then((data) => {
        const { token, user } = data.data;
        localStorage.setItem("token", token);
        context.setAuth({
          id: user.id,
          name: user.name,
          logged: true,
        });
        navigate("/jobs", {
          replace: true,
        });
      })
      .catch((error) => {
        setError({
          isError: true,
          message: error.response.data.message,
          loading: false,
          code: error.response.status,
        });
      });
  };

  return (
    <div>
      <form
        className="w-96 p-4 bg-azul/80 rounded-xl shadow-lg flex flex-col justify-center items-center"
        onSubmit={login}
      >
        <Input
          inputTitle="Email"
          inputType="email"
          inputRef={email}
          inputPlaceholder="example@xyz.co"
        />
        <Input
          inputTitle="Password"
          inputType="password"
          inputRef={password}
          inputPlaceholder="******"
        />
        <Button textButton="Login" />
      </form>
      {error.loading && (
        <p className="w-full p-4 my-2 bg-yellow-200 rounded-lg shadow-lg text-black/70">
          Loading.... wait...
        </p>
      )}

      {error.isError && (
        <p className="w-full p-4 my-2 bg-red-200 rounded-lg shadow-lg text-black/70">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Access;
