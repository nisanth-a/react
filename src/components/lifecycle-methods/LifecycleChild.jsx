import React, { Component } from "react";

export class LifecycleChild extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount Method");
  }
  render() {
    return (
      <>
        <div className="ui header">Lifecycle Child</div>
        <p className="ui left aligned container">
          This is a child class component being passed as a prop to the parent
          class component
        </p>
      </>
    );
  }
}

export default LifecycleChild;
