import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import { post } from "../api";

import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";

const Register = () => {
  const context = useContext(AuthContext);
  const [error, setError] = useState({
    isError: false,
    message: "",
    loading: false,
    code: 0,
  });

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const role = useRef();

  const signup = (event) => {
    event.preventDefault();

    setError({ ...error, loading: true });
    post("/api/auth/signup", {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      role: role.current.value,
    })
      .then(({ data }) => {
        setError({ ...error, loading: false });
        localStorage.setItem("token", data.token);
        context.setAuth({
          id: data.user.id,
          name: data.user.name,
          logged: true,
        });
      })
      .catch((error) => {
        // console.log(error.response.data);
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
        onSubmit={signup}
      >
        <Input
          inputTitle="Name"
          inputType="text"
          inputRef={name}
          inputPlaceholder="First Name"
        />
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
        <Select
          selectTitle="Role"
          selectRef={role}
          selectValues={["employer", "applicant"]}
        />
        <Button textButton="Sign Up" />
      </form>

      {error.loading && (
        <p className="w-full p-4 my-2 bg-yellow-200 rounded-lg shadow-lg text-black/70">
          Loading.... wait...
        </p>
      )}

      {error.isError && (
        <p className="w-full p-4 my-2 bg-red-200 rounded-lg shadow-lg text-black/70">
          {error.message}
          {error.code === 400 && (
            <Link
              to="/login"
              className="p-2 mx-2 rounded-md bg-white/30 text-white hover:underline"
            >
              Login
            </Link>
          )}
        </p>
      )}
    </div>
  );
};

export default Register;
