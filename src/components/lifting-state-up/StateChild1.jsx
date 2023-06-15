import React from "react";

function StateChild1(props) {
  return (
    <>
      <div className="ui header">State Child1</div>
      {props.counter}
    </>
  );
}

export default StateChild1;
