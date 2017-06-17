import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.listItems = props.listItems.map(listItem => <li key={listItem.toString()}>{listItem}</li>);
  }

  render() {
    return (
      <ul>{this.listItems}</ul>
    );
  }
}
