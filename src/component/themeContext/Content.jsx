import React, { useState } from "react";
import Profile from "./Profile";
import Login from "./Login";
import { LoginContext } from "./LoginContext";

export default function Content() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </>
  );
}
