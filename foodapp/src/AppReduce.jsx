import { useReducer, useState } from "react";

export default function AppReduce() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type === "increment") {
      return { ...state, count: state.count + state.incrementBy };
    }

    if (action.type === "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    }

    if (action.type === "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
  }
  return (
    <div>
      Use reducer {state.count}
      <input
        type="text"
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "setIncrement", payload: Number(e.target.value) })
        }
      />
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment count
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement count
      </button>
    </div>
  );
}
