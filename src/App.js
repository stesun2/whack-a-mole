import React, { Component } from 'react'
import './App.css'
import Mole from './components/mole/Mole.js'
// import { useState } from 'react'

class App extends Component {
  // const [isVisible, setVisible] = useState(false)

  // 
  state = {
    dens: this.getDensState(),
    points: 0,
  }
  componentDidMount() {
    this.startGame()
  }
  startGame() {
    setInterval(() => {
      this.setState({
        dens: this.getDensState()
      })
    }, 1500)
  }
  // Filling up the den randomly with T of F values for each?
  getDensState() {
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }
  // 
  onMoleWhacked = () => {
    this.setState({
      points: this.state.points + 1
    })
  }
  render() {
    const dens = this.state.dens.map((den, index) => {
      return (
        <Mole key={`mole-${index}`} den={ den } onMoleWhacked={ this.onMoleWhacked } />
      )
    })
    return (
      <div className="App">
        <h1>WHACK-A-MOLE!</h1>
        <h2>Points: {this.state.points}</h2>
        <div className="dens">
          {dens}
          <div style={{clear: 'both'}}></div>
        </div>
      </div>
    )
  }
}

export default App
