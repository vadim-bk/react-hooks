import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { ItemsList } from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  const generateItemsFromAPI = useCallback(
    (indexItem) => {
      return new Array(count).fill("").map((_, i) => `Element ${i + indexItem}`);
    },
    [count]
  );

  return (
    <>
      <h1 style={styles}>Cont elements: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button className="btn btn-warning" onClick={() => setColored((prev) => !prev)}>
        Change
      </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}

export default App;
