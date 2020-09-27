import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const complexComputed = (num) => {
  console.log("complexComputed");
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
};

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? "darkred" : "black",
  }), [colored]);

  const computed = useMemo(() => {
    return complexComputed(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles changed");
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Computed property: {computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber((prev) => number + 1)}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={() => setNumber((prev) => number - 1)}>
        Decrement
      </button>
      <button className="btn btn-warning" onClick={() => setColored((prev) => !prev)}>
        Change
      </button>
    </>
  );
}

export default App;
