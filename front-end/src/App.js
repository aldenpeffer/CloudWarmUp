import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setColor = this.setColor.bind(this);
    this.state = {
      color: "white"
    }
  }

  handleClick() {
    console.log("test");
    var color;
    axios.get('http://localhost:3030/color')
      .then((response) => {
        color = response.data.color;
        this.setState({
          color: response.data.color
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }

  setColor(newColor) {
    this.setState({
      color: newColor
    });
  }

  render() {
    console.log(this.state.color);
    return (
      <div className="App" style={{backgroundColor:"" + this.state.color}}>
        <button onClick={this.handleClick} >HIT ME UP, FOOL!</button>
      </div>
    );
  }
}

export default App;
