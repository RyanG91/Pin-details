import React, { Component } from 'react'
import Board from './Board'


class Square extends Component {
  state = {
    pinDetails: []
  }
  render() {
    return (
      <button className="square" onClick={() =>
        this.state.pinDetails.push(this.renderSquare)
      }>
        { this.props.value }
      </button>
    );
  }
}

export default Square
