import React from "react";
import { incrementValue, decrementValue, resetValue } from "./Action";
import { useSelector, useDispatch } from "react-redux";

export default function CounterFunctional() {
  const count = useSelector((state) => state.modifyNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="ui header">Employee Component...</h2>
      <p className="ui sub header">The Employee salary is : ₹{count}</p>
      <br></br>
      <button
        className="ui green button"
        onClick={() => dispatch(incrementValue())}
      >
        Increment
      </button>
      <button
        className="ui red button"
        onClick={() => dispatch(decrementValue())}
      >
        Decrement
      </button>
      <button className="ui button" onClick={() => dispatch(resetValue())}>
        Reset
      </button>
    </div>
  );
}
