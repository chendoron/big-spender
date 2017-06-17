import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.logTime = this.logTime.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  logTime(event) {
    console.log(this.state.date.toLocaleTimeString(), event);
  }

  render() {
    return (
      <h2 onClick={event => this.logTime(event)}>
        It is {this.state.date.toLocaleTimeString()}.
      </h2>
    );
  }
}
