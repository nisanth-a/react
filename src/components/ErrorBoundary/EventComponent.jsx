import React, { useState } from "react";

export default function EventComponent() {
  const [error, setError] = useState(true);
  const handleClick = () => {
    try {
      throw new Error("Wrong Event");
    } catch (error) {
      setError(false);
    }
  };
  return (
    <div>
      <h2>Hello Event</h2>
      <p>{error ? error : ""}</p>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}
