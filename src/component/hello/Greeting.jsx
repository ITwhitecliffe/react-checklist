import React, { useState } from "react";
import Counter from "../reducer/Counter";
import TodoWithReducer from "../reducer/TodoWithReducer";

function Greeting() {
  // const [fName, setFName] = useState('')
  // const [lName, setLName] = useState('')
  const [userName, setUserName] = useState({ fName: "", lName: "" });

  // function updateFName(event) {
  //     const firstName = event.target.value
  //     setFName(firstName)
  // }
  // function updateLName(event) {
  //     const lastName = event.target.value
  //     setLName(lastName)
  // }

  function updateUserName(event) {
    // const { newValue, inputName} = event.target
    const value = event.target.value;
    const name = event.target.name;
    setUserName({
      ...userName,
      [name]: value,
    });
    // same as above
    // setUserName(user => {
    //     if (name === 'fName'){
    //         return {fName: value, lName: user.lName}
    //     } else if (name === 'lName'){
    //         return {fName: user.fName, lName: value}
    //     }
    // })
  }

  return (
    <div>
      <h1>
        Hello {userName.fName} {userName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateUserName}
          placeholder="First Name"
          value={userName.fName}
        />
        <input
          name="lName"
          onChange={updateUserName}
          placeholder="Last Name"
          value={userName.lName}
        />
        <button>Submit</button>
      </form>
      <br />
      <div>
        <Counter />
        <TodoWithReducer />
      </div>
    </div>
  );
}

export default Greeting;
