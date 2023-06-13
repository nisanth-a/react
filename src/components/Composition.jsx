import React, { Component } from "react";

export class Composition extends Component {
  render() {
    return (
      <>
        <div className="ui header">Composition vs Inheritance</div>
        <Sidebar data={"Sidebar props"}>
          <h3>Sidebar head</h3>
          <List />
        </Sidebar>
      </>
    );
  }
}

function Sidebar(props) {
  return <div>{props.children}</div>;
}

function List() {
  return (
    <>
      <h3>Sidebar Item 1</h3>
      <h3>Sidebar Item 2</h3>
      <h3>Sidebar Item 3</h3>
      <h3>Sidebar Item 4</h3>
      <h3>Sidebar Item 5</h3>
    </>
  );
}

export default Composition;
