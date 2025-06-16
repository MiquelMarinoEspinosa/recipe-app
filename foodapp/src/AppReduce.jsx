import { useReducer, useState } from "react";

export default function AppReduce() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    if (action.type === "increment") {
      return { ...state, count: state.count + action.payload };
    }

    if (action.type === "decrement") {
      return { ...state, count: state.count - action.payload };
    }
  }
  return (
    <div>
      Use reducer {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment count
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement count
      </button>
    </div>
  );
}
