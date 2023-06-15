import React from "react";

function StateChild2(props) {
  return (
    <>
      <div className="ui header">State Child2</div>
      <button className="ui blue button" onClick={props.increment}>Increment</button>
    </>
  );
}

export default StateChild2;
