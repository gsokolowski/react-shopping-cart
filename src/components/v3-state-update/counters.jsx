import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
      { id: 5, value: 1 }
    ]
  };

  // handleDelete method waits for onDelete event send from counter component and pass reference to that method via probs in Counter component
  handleDelete = counterId => {
    // counterId is a parameter to know what needs to be updated
    console.log("Event Handler Called", counterId);
    // make copy of state and get counters except counter of passed id and you will have new state list without that one,
    // and this is how you can delete it from the list
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    ); // get one by one but only if counter.id does not have id of that one passed (by ondelete from Counter component)

    this.setState({ counters: counters }); // overrride state.counters with new counters without deleted counter
  };
  // Debuging
  // Install React Developer Tools to you chrome
  // $r feature in Console
  // $r.render() gives div with button
  render() {
    return (
      <div>
        {/* Generate list of Counters (5 of them). Take array counters from state and go  each component Counter and make a list */}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} // it is a key not a probs.key
            onDelete={() => this.handleDelete(counter.id)} //populate props.onDelete function - here you receive event "delete" from counter and call handleDelete
            id={counter.id} // populate props.id in this counter by using counter.id
            value={counter.value} // populate props.value in this counter by using counter.value
            selected={true} // populate props.selected in this counter by using counter.selected
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
