import React, { Component } from 'react';
import './App.css';
import PubContainer from "./containers/PubContainer.js";

class App extends Component {
  render() {
    return (
      <>
      <h1> PUB </h1>
      <PubContainer/>
      </>
    );
  }
}

export default App;
