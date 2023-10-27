import React, { Component } from "react";
import Counter from "./counterComponents";

class Counters extends Component {
  render() {
    console.log("Counters-Rendered");
    const { onReset, counters, onDelete, onIncreament, onDecreament } =
      this.props;
    return (
      <>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncreament={onIncreament}
            onDecreament={onDecreament}
            counter={counter}
          ></Counter>
        ))}
      </>
    );
  }
}

export default Counters;
