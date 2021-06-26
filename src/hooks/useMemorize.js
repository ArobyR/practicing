import { useState, useMemo, useCallback } from "react";

const useMemorize = (initialValue, initialView) => {
  const [counter, setCounter] = useState(initialValue);
  const [view, setView] = useState(initialView);

  const iterCounter = (iter) => {
    for (let i = 0; i < iter; i++) {
      console.log("procesando");
    }
    return "Fin del proceso";
  };
  const iterConterMemo = useMemo(() => iterCounter(counter), [counter]);

  const add = useCallback(() => {
    setCounter((actual) => actual + 1);
  }, [setCounter]);

  const hide = useCallback(() => {
    setView((current) => !current);
  }, [setView]);

  return [counter, view, iterConterMemo, setView, add, hide];
};

export default useMemorize;
