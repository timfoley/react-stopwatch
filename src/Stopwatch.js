import React, { Component } from 'react';
import './Stopwatch.css';
import TimeDisplay from './TimeDisplay'
import StartPause from './StartPause'
import Reset from './Reset'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeElapsed: 0,
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <TimeDisplay />
        <div className="controls">
          <StartPause /> <Reset />
        </div>
      </div>
    );
  }
}

export default Stopwatch;
