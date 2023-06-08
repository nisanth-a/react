import React from "react";

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

function ConditionalRendering() {
  return (
    <>
      <div className="ui header ui basic center aligned segment">
        Conditional Rendering
      </div>
      <div className="ui green message">
        {false ? <p>true</p> : <p>false</p>}
      </div>

      <div className="ui olive message">{true && <p>true</p>}</div>
      
      <section className="ui left aligned container">
        <h1>Checklist for Session</h1>
        <ul>
          <Item isPacked={true} name="Presentation PPT" />
          <Item isPacked={true} name="Knowledge on tool/technology" />
          <Item isPacked={false} name="Presenting skills" />
          <Item isPacked={false} name="Interactive audience" />
        </ul>
      </section>
    </>
  );
}

export default ConditionalRendering;
