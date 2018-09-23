// impr<tab>
import React, { Component } from "react";

// cc<tab>
class Counter extends Component {
  // object that includes any data that this component needs
  // remove local set of state - this will be controlled component
  // state = {
  //   value: this.props.counter.value // set state based on passed counter.value from counters
  // };

  // use arrow finctions inseatd of bindimg this in contructor().
  // no local state so this method need to be removed aswell
  // handleIncrement = productId => {
  //   console.log("Increment Clicked", this);
  //   console.log("Product Id", productId);
  //   // updating state
  //   this.setState({ value: this.props.counter.value + 1 }); // increment value of this actual counter state this.counter state.value = this.state.value + 1
  // };

  render() {
    // show props of object you can read props from parent object
    console.log("props", this.props);

    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} // passed full object counter
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button // onClick {this.props.onDelete}  this is child component (counter) that is reising this event to parent component (counters) , and parent is handling it
          onClick={() => this.props.onDelete(this.props.counter.id)} // Im calling props.onDelete function which is set in counters.jsx onDelete={this.handleDelete} and onDelete calls this.handleDelete in counters.jsx
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    // badge-warning is yellow
    // badge-primary is blue
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    // this is  object destructuring
    const { value } = this.props.counter; // pick this.props.counter from passed probs, no more local state
    return value === 0 ? "Zero" : value;
  }

  styles = {
    // css as camel notation
    fontSize: "20px",
    fontWeight: "bold"
  };
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
