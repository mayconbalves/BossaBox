import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  render() {
    return (
      <h1> Hello, World! </h1>
    )
  }
}

const container = document.getElementById('app');
ReactDOM.render(<App />, container);