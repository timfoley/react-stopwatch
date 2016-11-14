import React, { Component } from 'react';
import './Stopwatch.css';

class Stopwatch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      elapsedTime: 0,
    }
  }

  start(e) {
    // start the clock, and make sure to save the interval id for later use
    let intervalId = window.setInterval(_ => {
      this.setState({
        elapsedTime: this.state.elapsedTime + 1
      })
    }, 10)
    this.setState({
      intervalId: intervalId
    })
  }

  pause(e) {
    window.clearInterval(this.state.intervalId)
  }

  reset(e) {
    window.clearInterval(this.state.intervalId)
    this.setState({
      elapsedTime: 0,
      intervalId: null
    })
  }



  render() {
    return (
      <div className="stopwatch">
        <div className="time-display">
          {this.state.elapsedTime}
        </div>
        <div className="controls">
          <a className="button" href="#" onClick={e => this.start(e)}>Start</a>
          <a className="button" href="#" onClick={e => this.pause(e)}>Pause</a>
          <a className="button" href="#" onClick={e => this.reset(e)}>Reset</a>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
