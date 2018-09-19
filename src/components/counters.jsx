import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // Debuging
  // Install React Developer Tools to you chrome
  // $r feature in Console
  // $r.render() gives div with button
  render() {
    return (
      <div>
        {/* get each counter and map it to each component */}
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} selected={true} />
          /* component, also set key property to id of seperate counter */
          /* value and selected are values to pass to other componnet, 
          key is not in props, key is for indexing elements */
        ))}
      </div>
    );
  }
}

export default Counters;
