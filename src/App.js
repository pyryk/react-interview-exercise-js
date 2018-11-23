import React, { Component } from 'react';
import gif from './example.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <h1>React Exercise</h1>
        <h4>In idiomatic TypeScript and React, implement what is shown in the gif below</h4>
        <h4>Exact styling is not top priority, you should aim for the functionality</h4>
        <h5>(Screen recorder stuff of course excluded, the controls and the red click circles)</h5>
        <img src={gif} width={'90%'} alt="" />
      </div>
    );
  }
}

export default App;
