import React from "react";

class Timer extends React.Component {
  // since this is a stateful react component, we can access "props" in the es6 constructor method...
  constructor(props) {
    super();

    // ...which is only useful if the props are going to define the initial state. here, we are setting duration to the number of seconds between the timestamp and now
    this.state = {
      duration: Math.floor((new Date().getTime() - props.time) / 1000)
    };
  }

  componentDidMount() {
    // after the component has loaded, let's continue to update the duration by one second
    this.tick = setInterval(() => {
      this.setState({
        duration: this.state.duration + 1
      });
    }, 1000);
  }

  // this is a built-in react method that is triggered when the component has been destroyed / removed from the dom
  componentWillUnmount() {
    // we need to capture this event to stop our interval. otherwise, it will keep running forever, potentially causing memory leaks
    clearInterval(this.tick);
  }

  // custom method to format the duration in 00:00 syntax
  format = (t) => {
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

  render() {
    let styles = {};

    // turn the span red if the duration is over 10 minutes
    if (this.state.duration > 600) {
      styles.color = "red";
    }

    return (
      <span style={styles}>{this.format(this.state.duration)}</span>
    );
  }
}

export default Timer;
