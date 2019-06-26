import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {
  render() {
    return (
      <div className="den">
        <img src={MoleIcon} className="Mole" alt="Mole" />
      </div>
    )
  }
}

export default Mole
