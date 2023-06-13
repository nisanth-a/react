import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank You for subscribing",
    });
  }

  updateMessage() {
    this.setState({
      message: "Welcome Visitor",
    });
  }

  render() {
    return (
      <>
        <h1>State</h1>
        <div id="state_class">
          <h2>{this.state.message}</h2>
          <button className="state-button" onClick={() => this.changeMessage()}>
            Subscribe
          </button>

          <button
            id="btn-unsubscribe"
            className="state-button"
            onClick={() => this.updateMessage()}
          >
            Unsubscribe
          </button>
        </div>
      </>
    );
  }
}
