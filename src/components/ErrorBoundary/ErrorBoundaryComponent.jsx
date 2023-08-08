import React, { Component } from "react";

export default class ErrorBoundaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(info);
    console.log(error);
  }

  render() {
    if (this.state.error) {
      return <div>Some Error Occured </div>;
    } else {
      return this.props.children;
    }
  }
}
