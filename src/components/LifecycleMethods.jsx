import React, { Component } from "react";
import LifecycleParent from "./lifecycle-methods/LifecycleParent";
import LifecycleChild from "./lifecycle-methods/LifecycleChild";

export class LifecycleMethods extends Component {
  render() {
    return (
      <>
        <div className="ui basic center aligned segment">
          <h2>Lifecycle Methods</h2>
        </div>
        <LifecycleParent />
        {/* <LifecycleChild /> */}
      </>
    );
  }
}

export default LifecycleMethods;
