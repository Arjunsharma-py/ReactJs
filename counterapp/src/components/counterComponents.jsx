import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }

  render() {
    console.log("CounterComponent-Rendered");
    return (
      <div>
        <span className={this.getBgClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter)}
          className="rounded p-1 m-1 text-white bg bg-dark"
        >
          +
        </button>
        |
        <button
          onClick={() => this.props.onDecreament(this.props.counter)}
          className="rounded p-1 m-1 text-white bg bg-dark"
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBgClasses() {
    let classes = "p-1 m-1 rounded text-white bg bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
