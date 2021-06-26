import { useRef } from "react";

const Ref = () => {
  const ref = useRef(null);
  const handleRef = () => {
    // const ref = document.getElementById("area")
    ref.current.value = "Ingresando...";
    ref.current.select();
    console.log(ref.current);
  };

  return (
    <>
      <h2 onClick={handleRef}>UseRef</h2>
      <hr />
      <textarea ref={ref} id="area" cols="30" rows="10"></textarea>
    </>
  );
};

export default Ref;
