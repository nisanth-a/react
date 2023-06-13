import React, { useState } from "react";

function Forms() {
  const [name, setName] = useState("");
  function nameHandler(e) {
    setName(e.target.value);
  }
  return (
    <>
      <div className="ui header">Forms</div>
      <form>
        <fieldset>
          <legend className="ui header">Forms in React</legend>
          <label className="ui label">
            Name:
            <input
              type="text"
              className="ui focus input"
              onChange={nameHandler}
            ></input>
          </label>
          {name}
        </fieldset>
      </form>
    </>
  );
}

export default Forms;
