import React, { useState } from "react";

export const UniDirectionalDataFlow = () => {
  const incrementCounter = () => {
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);

  return (
    <>
      <div>UniDirectionalDataFlow</div>
      <div>
        <h2>Parent Component</h2>
        <p>Count: {count}</p>
        <ChildComponent count={count} incrementCount={incrementCounter} />
      </div>
    </>
  );
};

const ChildComponent = ({ count, incrementCount }) => {
  const doubleCount = count * 2;
  return (
    <div>
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};
