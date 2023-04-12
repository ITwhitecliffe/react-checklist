import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";

export default function Profile() {
  const { username } = useContext(LoginContext);

  return (
    <>
      <h1> Hello {username} </h1>
      <h2> You personal info here ... </h2>
    </>
  );
}
