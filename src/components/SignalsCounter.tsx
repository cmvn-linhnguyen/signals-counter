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
    <div>
      <h2>Counter with Signal</h2>
      <button onClick={decrease}>Decrease</button>
      <h4>Count: {count}</h4>
      <button onClick={increase}>Increase</button>
      <h4>Double Count: {doubleCount}</h4>
    </div>
  );
};
