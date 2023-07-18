import React, { useState } from "react";
import { incrementValue, decrementValue } from "./Action";
import { useSelector, useDispatch } from "react-redux";
import modifyNumber from "./Reducer/reducerfile";

export default function CounterFunctional() {
  const count = useSelector((state) => state.modifyNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Employee Component...</h2>
      <p>The Employee salary is : {count}</p>
      <button onClick={() => dispatch(incrementValue())}>Increment</button>
      <button onClick={() => dispatch(decrementValue())}>Decrement</button>
    </div>
  );
}
