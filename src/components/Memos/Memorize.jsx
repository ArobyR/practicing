import React, { useCallback, useMemo, useState } from "react";
import useMemorize from "../../hooks/useMemorize";
import { Btn } from "./Btn";
import Dato from "./Dato";

const Memorize = () => {
  // const [counter, setcounter] = useState(10);
  // const [view, setView] = useState(true);

  //   const iterCounter = (iter) => {
  //     for (let i = 0; i < iter; i++) {
  //       console.log("procesando");
  //     }
  //     return "Fin del proceso";
  //   };
  //   const iterConterMemo = useMemo(() =>  iterCounter(counter), [counter])

  // const add = useCallback(() => {
  //   setcounter(actual => actual + 1);
  // }, [setcounter])

  //  custom hook
  const [counter, view, iterConterMemo, setView, add] = useMemorize(10, false);

  return (
    <div>
      {iterConterMemo}
      <h2>
        Memorizes: <Dato value={counter} />
      </h2>
      <Btn addNum={add} />
      <button onClick={() => setView(!view)}>View/Quit</button>
    </div>
  );
};

export default Memorize;
