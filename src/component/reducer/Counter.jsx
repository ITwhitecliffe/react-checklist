import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    // case "increment":
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    // case "decrement":
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    // dispatch({ type: "increment" });
    dispatch({ type: ACTIONS.INCREMENT });
  };

  function decrement() {
    // dispatch({ type: "decrement" });
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
