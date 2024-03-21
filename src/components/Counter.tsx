import React, { useState } from "react";

export const Counter = () => {
  console.log("Render Counter with useState");

  const [count, setCount] = useState(0);

  const doubleCount = count * 2;

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="container">
      <h2 className="counter-header">
        Counter with{" "}
        <span className="highlight" style={{ color: "#DF826C" }}>
          useState
        </span>
      </h2>
      <div className="wrapper">
        <button className="counter-button" onClick={decrease}>
          -
        </button>
        <h4 className="counter-text">Count: {count}</h4>
        <button className="counter-button" onClick={increase}>
          +
        </button>
      </div>
      <h4 className="counter-text">Double Count: {doubleCount}</h4>
    </div>
  );
};
