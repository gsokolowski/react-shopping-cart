import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
      { id: 5, value: 1 }
    ]
  };

  // Livecircle hooks - are places in Component where you can hook into to do something with component
  // Livecircle hook - Constructor - it is called once at the begining of building component and it is used to initialise local state with passed props
  constructor(props) {
    super(props); // you need to pass props
    console.log("App - constructor", this.props);
    // constructor is used to set local state based on props
    // e.g
    // this.state = this.props.something; // not setState, in constructor you do this.state = this.props.something;
  }

  // Livecircle hook - componentDidMount is after caomponent is rendered into dom and it is perfect place for calling ajax data
  componentDidMount() {
    // Ajax call componentDidMount - use for Ajax call to get data from server
    console.log("App - componentDidMount");
    //this.setState({ movies: movies });
  }

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

  // Livecircle hook - render
  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
