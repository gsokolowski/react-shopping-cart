// impr<tab>
import React, { Component } from "react";

// cc<tab>
class Counter extends Component {
  // object that includes any data that this component needs
  state = {
    count: this.props.value
  };

  styles = {
    // css as camel notation
    fontSize: "20px",
    fontWeight: "bold"
  };

  // use arrow finctions inseatd of bindimg this in contructor().
  handleIncrement = product => {
    console.log("Increment Clicked", this);
    console.log(product);
    // updating state
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // show props of object you can read props from parent object
    console.log("props", this.props);

    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 2 })} // im passing data to handleIncrement function, I could put there product object
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    // badge-warning is yellow
    // badge-primary is blue
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    // this is  object destructuring
    const { count } = this.state; // pick count property from this.state object
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

/**
 * React Topics
 
 * Pass Data
 * Raise and Handle Events
 * Multiply Components in Sync
 * Functional Components
 * Lifcycle hooks
 */
