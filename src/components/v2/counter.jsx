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
    // return '<h1></h1>' is like React.createElement
    // this is js expression {this.state.count}
    // this is js expression {2+2}
    // jsx expresssion must have only one root element
    // <React.Fragment> make html inside not contained in <div>
    return (
      <div>
        {/* gets children  <counter>h4<counter>*/}
        {this.props.children}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // notice that you dont call handleIncrement functon you only pass reference to it (this.handleIncrement)
          // onClick={this.handleIncrement}
          // if you need to pass argument to a function you need to do inline arrorw function
          // and then you can pass data to it like id:1 or product object
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
