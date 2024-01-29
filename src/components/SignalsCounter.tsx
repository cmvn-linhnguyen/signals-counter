import { computed, signal } from "@preact/signals-react";
import React from "react";

export const SignalsCounter = () => {
  console.log("Render Counter with Signal");

  const count = signal(0);

  const doubleCount = computed(() => count.value * 2);

  const increase = () => {
    count.value++;
  };

  const decrease = () => {
    count.value--;
  };

  return (
    <div className="container">
      <h2 className="counter-header">
        Counter with <span className="highlight">Signal</span>
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
