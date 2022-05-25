import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { MainTitle } from "../components/MainTitle";

import { Input } from "../components/Input";

const User = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const name = useRef();
  const email = useRef();

  useEffect(() => {
    name.current.value = auth.name;
    email.current.value = auth.email;
  }, []);

  return (
    <div className="w-full bg-lila/90">
      <MainTitle title="User" />
      <form className="w-96 mx-auto h-screen py-20 flex flex-col justify-center items-center">
        <h3>ID: {auth.id}</h3>
        <Input
          inputTitle="Name"
          inputType="text"
          inputRef={name}
          inputPlaceholder=""
        />
        <Input
          inputTitle="Email"
          inputType="email"
          inputRef={email}
          inputPlaceholder=""
        />
        <pre>{JSON.stringify(auth, null, 2)}</pre>
        <button className="px-4 py-2 rounded-md bg-rosa/90 hover:bg-rosa hover:shadow-md hover:text-white">
          Update
        </button>
      </form>
    </div>
  );
};

export { User };
