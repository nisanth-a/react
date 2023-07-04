import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>useState Hook</h3>
      <p>Manages State for a functional component</p>
      <p>Count: {count}</p>
      <button className='ui focus button' onClick={increment}>Increment</button>
    </div>
  );
}

export default UseState;