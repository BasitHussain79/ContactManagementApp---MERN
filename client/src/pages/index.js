import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
      break;
    case "Decrement":
      return { count: state.count - 1 };
      break;
    default:
      return state;
  }
}
const Home = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => dispatch({ type: "Increment" });
  const decrement = () => dispatch({ type: "Decrement" });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Home;
