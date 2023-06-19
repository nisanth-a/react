import React, { Component, createRef } from "react";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.UserNameRef = createRef();
    this.passwordRef = createRef();
  }
  componentDidMount() {
    this.UserNameRef.current.focus();
  }

  render() {
    return (
      <div>
        <h2>Login Screen</h2>
        <div>
          <label>
            Username : <input type="text" ref={this.UserNameRef} />
          </label>
        </div>
        <pre />
        <div>
          <label>
            Password : <input type="password" ref={this.passwordRef} />
          </label>
        </div>
        <pre />
        <button>LogIn</button>
      </div>
    );
  }
}
