import React from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import BasicHooks from "./BasicHooks";
import "./Hooks.css";

function Hooks() {
  return (
    <>
      <h1 className="heading-hooks">React Hooks</h1>
      <div className="row-hooks">
        <div className="col-useState">
          <UseState />
        </div>
        <div className="col-useEffect">
          <UseEffect />
        </div>
      </div>
      <div className="row-hooks">
        <div className="col-useContext">
          <UseContext />
        </div>
      </div>
      <div className="row-hooks">
        <BasicHooks />
      </div>
    </>
  );
}

export default Hooks;
