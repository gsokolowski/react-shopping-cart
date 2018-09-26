import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // pbject destucturing
    const { onReset, onDelete, onIncrement, counters } = this.props;

    console.log("Counters - Rendered");

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {/* Generate list of Counters (5 of them). Take array counters from state and go  each component Counter and make a list */}
        {counters.map(counter => (
          <Counter
            key={counter.id} // it is a key not a probs.key
            onIncrement={onIncrement}
            onDelete={onDelete} //populate props.onDelete function - here you receive event "delete" from counter and call handleDelete
            // instead of seperate values like id, value and selsected
            // id={counter.id} // populate props.id in this counter by using counter.id
            // value={counter.value} // populate props.value in this counter by using counter.value
            // selected={true} // populate props.selected in this counter by using counter.selected
            // just send full cunter object
            counter={counter} // full object passed so you have counter.id counter.value inside
          />
          /* component, also set key property to id of seperate counter */
          /* value and selected are values to pass to other componnet, 
          key is not in props, key is for indexing elements */
        ))}
      </div>
    );
  }
}

export default Counters;
