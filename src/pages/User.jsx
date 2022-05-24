import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { MainTitle } from "../components/MainTitle";

const User = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <div className="w-full bg-lila/90">
      <MainTitle title="User" />
      <section className="w-full py-20 flex justify-center items-center">
        <pre>{JSON.stringify(auth, null, 2)}</pre>
      </section>
    </div>
  );
};

export { User };
