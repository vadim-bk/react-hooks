import React from "react";
import { useAlert } from "./Alert/AlertContext";

export const Main = () => {
  const { show } = useAlert();

  return (
    <>
      <h1>Hello with example about Context</h1>
      <button className="btn btn-success" onClick={() => show("This text from Main.js")}>
        Show alert
      </button>
    </>
  );
};
