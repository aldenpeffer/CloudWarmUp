import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("test");
    axios.get('http://192.168.1.154:3000/color')
      .then(function (response) {
        console.log("start" + response + "end");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick} >HIT ME UP, FOOL!</button>
      </div>
    );
  }
}

export default App;
