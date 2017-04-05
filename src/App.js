import React, { Component } from 'react';
import './App.css';
import Mole from './components/mole/Mole.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dens: this._getDensState(),
      points: 0
    };
  }
  componentDidMount() {
    this._startGame();
  }
  _startGame() {
    setInterval(() => {
      this.setState({
        dens: this._getDensState()
      });
    }, 1500)
  }
  _getDensState() {
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    });
  }
  _onMoleWhacked() {
    this.setState({
      points: this.state.points + 1
    });
  }
  render() {
    const dens = this.state.dens.map((den, index) => {
      return (
        <Mole key={`mole-${index}`} />
      );
    });
    return (
      <div className="App">
        <h1>WHACK-A-MOLE!</h1>
        <h2>Points: {this.state.points}</h2>
        <div className="dens">
          {dens}
          <div style={{clear: 'both'}}></div>
        </div>
      </div>
    );
  }
}

export default App;
