import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  addCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  deleteCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  resetCount() {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.addCount()}>Add</button>
        <button onClick={() => this.deleteCount()}>Delete</button>
        <button onClick={() => this.resetCount()}>Reset</button>
      </div>
    );
  }
}
