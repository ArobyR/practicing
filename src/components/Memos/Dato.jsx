import React, { memo } from "react";

const Dato = ({ value }) => {
  console.log(value);
  return <p>{value}</p>;
};

export default memo(Dato);
