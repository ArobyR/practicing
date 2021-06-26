import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const Custom = () => {
  const [counter, increment, decrement] = useCounter(22);

  return (
    <>
      <h2>Custom Hook {counter}</h2>
      <hr />
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => decrement()}>-1</button>
    </>
  );
};

export default Custom;
