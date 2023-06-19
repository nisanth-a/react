import React, { createRef, useState } from "react";

export default function SimpleRef() {
  const countRef = createRef();

  const Add = () => {
    countRef.current.value++;
  };
  const Delete = () => {
    countRef.current.value--;
  };
  return (
    <div>
      {alert("Component Rendered")}
      <input type="text" ref={countRef} />
      <button onClick={Add}>Increment</button>
      <button onClick={Delete}>Decrement</button>
    </div>
  );
}
