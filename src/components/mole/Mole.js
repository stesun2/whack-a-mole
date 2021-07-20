import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="den">
        
        {/* <img src= className="Mole" alt="Mole" /> */}
         {this.props.den.isMoleVisible ? <img src={MoleIcon} onClick={this.props.onMoleWhacked} className="Mole" alt="Mole" /> : null }
         {/* {this.props.den.isMoleVisible ? this.props.onMoleWhacked : null} */}
      </div>
    )
  }
}

export default Mole
