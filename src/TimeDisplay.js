import React, { Component } from 'react';
import './Stopwatch.css';


class TimeDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeElapsed: 0,
    }
  }

  render() {
    return (
      <div className="time-display">
        00:00:00
      </div>
    );
  }
}

export default TimeDisplay;
