import React, { useState, useEffect } from "react";

function UseEffect() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h3>useEffect Hook</h3>
      <p>Manages lifecycle methods for a functional component</p>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default UseEffect;
