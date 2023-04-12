import React, { useState, useContext } from "react";
import { LoginContext } from "./LoginContext";

export default function Login() {
  //   const [username, setUsername] = useState("");
  //   const [showProfile, setShowProfile] = useState(false);

  const { setUsername, setShowProfile } = useContext(LoginContext);
  return (
    <>
      <div>
        <h3>All user content Content</h3>

        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        {/* <button
          onClick={() => {
            setShowProfile(true);
          }}
        > */}
        <button
          onClick={() => {
            setShowProfile(true);
          }}
        >
          Log In
        </button>
        {/* {showProfile && <h1>Hello {username}</h1>} */}
      </div>
    </>
  );
}
