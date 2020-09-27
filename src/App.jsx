import React, { useEffect, useState } from "react";
import "./App.css";

const useLogger = (value) => {
  useEffect(() => {
    console.log("Value changed", value);
  }, [value]);
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => setValue(e.target.value);

  const clear = () => setValue("");

  return {
    bind: { value, onChange },
    value,
    clear,
  };
};

function App() {
  const name = useInput("");
  const lastName = useInput("");

  const clearFrom = () => {
    name.clear();
    lastName.clear();
  };

  useLogger(name.value);

  return (
    <div className="container pt-3">
      <input type="text" {...name.bind} />
      <input type="text" {...lastName.bind} />
      <button className="btn btn-warning" onClick={clearFrom}>
        Clear
      </button>

      <hr />
      <h1>
        {name.value} {lastName.value}
      </h1>
    </div>
  );
}

export default App;
