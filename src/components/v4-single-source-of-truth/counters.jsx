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

  /*****
   *
   *
   * Stopped on 1:43:57 Single Source of Truth
   *
   *
   */

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

  // to reset all counters values you need to create copy of state , set each value as 0 , and overwrite Counters state
  handleReset = () => {
    console.log("Reset hit");
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counters }); // overrride state.counters with new counters without deleted counter
  };

  handleIncrement = counter => {
    console.log("handleIncrement hit"); // {id:0, value:4} is passed
    console.log(counter); // {id:0, value:4} is passed

    // you update state by making copy of state , updating it and overriding the whole state using setState()
    const counters = [...this.state.counters]; // clone whole state
    // find and current index in that state
    const index = counters.indexOf(counter); // get me index of this object {id:0, value:4} it will be 0 if first counter clicked
    counters[index] = { ...counter }; // clone passed counter
    counters[index].value = counters[index].value + 1; // increment value by 1
    this.setState({ counters: counters }); // overrride state.counters with new counters without deleted counter
  };
  // Debuging
  // Install React Developer Tools to you chrome
  // $r feature in Console
  // $r.render() gives div with button
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {/* Generate list of Counters (5 of them). Take array counters from state and go  each component Counter and make a list */}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} // it is a key not a probs.key
            onDelete={() => this.handleDelete(counter.id)} //populate props.onDelete function - here you receive event "delete" from counter and call handleDelete
            // instead of seperate values like id, value and selsected
            // id={counter.id} // populate props.id in this counter by using counter.id
            // value={counter.value} // populate props.value in this counter by using counter.value
            // selected={true} // populate props.selected in this counter by using counter.selected
            // just send full cunter object
            onIncrement={() => this.handleIncrement(counter)}
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
