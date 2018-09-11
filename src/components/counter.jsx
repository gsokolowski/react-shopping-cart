import React, { Component } from "react";
class Counter extends Component {
  // object that includes any data that this component needs
  state = {
    count: 0
  };
  render() {
    // return '<h1></h1>' is like React.createElement
    // this is js expression {this.state.count}
    // this is js expression {2+2}
    // jsx expresssion must have only one root element
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    //  this is destructing object
    const { count } = this.state; // pick count property from this.state object
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
