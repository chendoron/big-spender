import React from 'react';
import Styles from './SearchBar.scss';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <form className={Styles.searchBar}>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          <span> Only show products in stock</span>
        </label>
      </form>
    );
  }
}
