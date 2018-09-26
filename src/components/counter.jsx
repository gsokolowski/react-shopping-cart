// impr<tab>
import React, { Component } from "react";

// cc<tab>
class Counter extends Component {
  // updating Phase
  // Livecircle hook - componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log("counter - Rendered");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    // and here you can decide if you would like to make another Ajax call to server or not
    if (prevProps.counter.value != this.props.counter.value) {
      // e.g make Ajax call to server or not
    }
  }

  // Livecircle hook - componentWillUnmount - this is called just before component is removed from the dom
  componentWillUnmount() {
    console.log("counter - Unmount");
  }
  render() {
    // show props of object you can read props from parent object
    //console.log("props", this.props);

    console.log("counter - Rendered");

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
