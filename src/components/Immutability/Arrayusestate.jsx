import React, { useState } from "react";

const initState = ["Mercedes", "Baleno"];

export default function Arrayusestate() {
  const [model, setModel] = useState(initState);
  const addModel = () => {
    // model.push("Maruthi");
    // model.push("Indica");
    // setModel(model);

    const newModels = [...model];
    newModels.push("Maruthi");
    newModels.push("Indica");
    setModel(newModels);
  };
  return (
    <div>
      <p>Car Models include : </p>
      {model.map((models) => (
        <p key={models}>{models}</p>
      ))}
      <button onClick={addModel}>AddModels</button>
    </div>
  );
}
