import React, { useState } from "react";
import StateChild1 from "./StateChild1";
import StateChild2 from "./StateChild2";

function StateParent() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => setCounter(counter + 1);
  return (
    <>
      <div className="ui header">State Parent</div>
      <StateChild1 counter={counter} />
      <StateChild2 increment={clickHandler} />
    </>
  );
}

export default StateParent;
