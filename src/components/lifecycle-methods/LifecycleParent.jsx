import React, { Component } from "react";
import LifecycleChild from "./LifecycleChild";

export class LifecycleParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0,
    };
  }
  deleteHeading = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    console.log("componentDidMount Method");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate Method");
  }
  render() {
    let myheading;
    if (this.state.show) {
      myheading = <LifecycleChild />;
    }
    return (
      <>
        <div>
          <h3>Lifecycle Parent</h3>
        </div>
        <div className="ui left aligned container">
          <h1>{myheading}</h1>
          <button className="ui negative button" onClick={this.deleteHeading}>
            Delete Heading
          </button>
        </div>
        <br></br>
        <div className="ui right aligned container ui basic center aligned segment">
          <h3 className="ui header">COUNT: {this.state.count}</h3>
          <button
            className="ui blue button"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            INCREMENT
          </button>
        </div>
      </>
    );
  }
}

export default LifecycleParent;
