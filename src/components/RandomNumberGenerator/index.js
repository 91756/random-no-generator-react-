// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  randomNumberGen = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNum: randomNumber})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-container">
        <div className="cart">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.randomNumberGen}>
            Generate
          </button>
          <p className="count">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
