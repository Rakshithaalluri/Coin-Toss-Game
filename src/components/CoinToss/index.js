// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    totalCount: 0,
    headCount: 0,
    tailsCount: 0,
  }

  changeCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        totalCount: prevState.totalCount + 1,
        headCount: prevState.headCount + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
        tossImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {tossImage, totalCount, headCount, tailsCount} = this.state

    return (
      <div className="container">
        <div className="coin-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="head-tails-text"> Heads (or) Tails </p>
          <img src={tossImage} alt="toss result" className="toss-image" />
          <button className="button" type="button" onClick={this.changeCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-text">Total:{totalCount}</p>
            <p className="result-text">Heads:{headCount}</p>
            <p className="result-text">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
