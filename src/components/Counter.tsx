import React, { useState } from "react";

export const Counter = () => {
  console.log("Render Counter with useState");

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h2>Counter with useState</h2>
      <button onClick={decrease}>Decrease</button>
      <h4>Count: {count}</h4>
      <button onClick={increase}>Increase</button>
      <h4>Double Count: {count * 2}</h4>
    </div>
  );
};
