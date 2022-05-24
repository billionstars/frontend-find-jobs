import React from "react";
import { LinkNavBar } from "./LinkNavBar";

const InfoForRegistered = () => {
  return (
    <article className="w-full h-96 flex flex-col justify-center items-center rounded-lg p-4 bg-morado/20">
      <div className="my-4">
        <h2 className="text-3xl">
          To see our offers you need to be registered.
        </h2>
      </div>
      <div>
        <LinkNavBar linkTo="/login" linkTitle="Login" />
        <LinkNavBar linkTo="/signup" linkTitle="Sign Up" />
      </div>
    </article>
  );
};

export { InfoForRegistered };
