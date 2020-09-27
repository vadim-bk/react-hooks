import React, { useState } from "react";
import "./App.css";

const computeInitialCounter = () => {
  console.log("Some calculations");
  return Math.trunc(Math.random() * 20);
};

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter());
  const [counter, setCounter] = useState(() => computeInitialCounter());

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now(),
  });

  const increment = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
    // setCounter((prev) => prev + 1)
  };
  const decrement = () => setCounter(counter - 1);

  const updateTitle = () => setState((prev) => ({ ...prev, title: "New title" }));

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Increment
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Decrement
      </button>

      <button className="btn btn-default" onClick={updateTitle}>
        Change title
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
