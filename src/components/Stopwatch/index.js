import {Component} from 'react'
import './index.css'

const initialState = {displaySecs: 0, isTimerRunning: false}

class Stopwatch extends Component {
  state = initialState

  getDisplayTime = () => {
    const {displaySecs} = this.state
    const minutes = Math.floor(displaySecs / 60)
    const seconds = displaySecs % 60
    const formattedMins = minutes > 9 ? minutes : `0${minutes}`
    const formattedSecs = seconds > 9 ? seconds : `0${seconds}`

    return `${formattedMins}:${formattedSecs}`
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({displaySecs: prevState.displaySecs + 1}))
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState(initialState)
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>{this.getDisplayTime()}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="start-btn"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button type="button" className="stop-btn" onClick={this.stopTimer}>
              Stop
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
