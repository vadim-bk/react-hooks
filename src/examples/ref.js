import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("initial");

  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  const focus = () => inputRef.current.focus();

  useEffect(() => {
    renderCount.current++;
    focus();
  }, []);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Count render {renderCount.current}</h1>
      <h2>Previously state: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button className="btn btn-success" onClick={focus}>
        Focus
      </button>
    </div>
  );
}

export default App;
