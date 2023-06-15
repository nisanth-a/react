import React, { useState } from "react";

function Forms() {
  const [name, setName] = useState("");
  const [dropdown, setDropdown] = useState("React");

  function nameHandler(e) {
    setName(e.target.value);
  }

  function dropdownHandler(event) {
    setDropdown(event.target.value);
  }

  function submitHandler() {
    alert(`The submitted name is ${name}`);
  }
  return (
    <>
      <div className="ui header">Forms</div>
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend className="ui header">Forms in React</legend>
          <label className="ui label header">
            Name:
            <input
              type="text"
              className="ui focus input header"
              onChange={nameHandler}
            ></input>
          </label>
          <br></br>
          <br></br>
          <select className="ui dropdown" onChange={dropdownHandler}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
          <br></br>
          <div className="ui message">{dropdown}</div>
          <br></br>
          <button className="ui positive button">Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default Forms;
