import React, { memo } from "react";

export const Btn = memo(({ addNum }) => {
  console.log("Agregando add");
  return <button onClick={addNum}>+1</button>;
});
