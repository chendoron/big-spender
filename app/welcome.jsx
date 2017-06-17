import React from 'react';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
  }

  formatUser() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  render() {
    if (!this.user) {
      return null;
    }
    return (
      <h1>Hello, {this.formatUser()}</h1>
    );
  }
}
