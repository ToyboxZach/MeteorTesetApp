import React, { useState } from "react";
import { importStrings } from "./innter/stringImports";

export const Hello = () => {
  importStrings("es")
    .then((strings) => {
      console.log("Loaded strings:", strings);
    })
    .catch((error) => {
      console.error("Error loading strings:", error);
    });
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
