import React, { Component } from "react";
class Counter extends Component {
  // object that includes any data that this component needs
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    // css as camel notation
    fontSize: "20px",
    fontWeight: "bold"
  };

  // You don't need constructor if you use arrow functions
  //   constructor() {
  //     // Syntax error: 'this' is not allowed before super()  - so call constructor of base class which is Component
  //     super(); // base constructor
  //     console.log("Constructor", this);
  //     // No you can bind to handleIncrement function - in js every function is and object and you can call methoded and properties on it
  //     // on of object method is a bind() and with this method we can set value of 'this'
  //     // bind() will return new instance  of handleIncrement function and in that new function this always referencing current object
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // use arrow finctions inseatd of bindimg this in contructor().
  handleIncrement = product => {
    console.log("Increment Clicked", this);
    console.log(product);
    // updating state
    this.setState({ count: this.state.count + 1 });
  };

  // product data
  product = {
    id: 1
  };

  render() {
    // return '<h1></h1>' is like React.createElement
    // this is js expression {this.state.count}
    // this is js expression {2+2}
    // jsx expresssion must have only one root element
    // <React.Fragment> make html inside not contained in <div>
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
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

        <div>
          {/* Try in Chrome console */}
          {/* if (this.state.tags.length === 0)  display  "Please create a new tag" */}
          {/* In js true && 'Hi' gives Hi */}
          {/* In js true && 'Hi' && 'something' gives something */}
          {this.state.tags.length === 0 && "Please create a new tag"}
          {this.renderTags()}
        </div>
      </div>
    );
  }

  // list tags
  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There is no tags</p>;
    }
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
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
