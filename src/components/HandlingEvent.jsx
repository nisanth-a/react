import React, { useState } from "react";
import "./HandlingEvent.css";

function HandlingEvent() {
  const [name, setName] = useState("Ajay");
  const [occupation, setOccupation] = useState("Developer");

  var firstName = "abc";
  function setFirstName() {
    if (firstName === "abc") {
      firstName = "xyz";
    } else {
      firstName = "abc";
    }
    console.log(firstName);
  }

  function clickHandler() {
    alert(
      "Button has been clicked which demonstrates the handling of an event."
    );
    console.log(
      "Button has been clicked which demonstrates the handling of an event."
    );
  }
  function changeHandler(e) {
    setName(e.target.value);
  }
  function changeOccupationHandler(e) {
    setOccupation(e.target.value);
  }
  return (
    <>
      <div className="eventHandling-content">
        <div>
          <h1>Handling Event</h1>
          <button onClick={setFirstName}> NAME </button>
          {firstName}
        </div>
        <br></br>
        <div className="ui left aligned container ui basic center aligned segment">
          <button onClick={clickHandler} className="ui positive button">
            CLICK for handling event
          </button>
        </div>
        <br></br>
        <div className="ui basic center aligned segment">
          <form className="ui form form-tag">
            <fieldset className="fields">
              <label className="ui teal label">Name</label>
              <input
                type="text"
                className="ui focus input"
                onChange={changeHandler}
                defaultValue={name}
              />
              <br></br>
              <label className="ui teal label">Occupation</label>
              <input
                type="text"
                className="ui focus input"
                onChange={changeOccupationHandler} defaultValue={occupation}
              />
            </fieldset>
          </form>
        </div>
        <p className="ui right aligned text container">
          Using onChange event handler below we are displaying the name given in
          above name field
        </p>
        <h3>
          <b>
            {name} <br></br> {occupation}
          </b>
        </h3>
      </div>
    </>
  );
}

export default HandlingEvent;
