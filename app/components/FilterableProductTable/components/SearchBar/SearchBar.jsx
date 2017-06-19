import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SearchBar.scss';

export default class SearchBar extends React.Component {
  static get propTypes() {
    return {
      filterText: PropTypes.string.isRequired,
      isStockOnly: PropTypes.bool.isRequired,
    };
  }

  render() {
    return (
      <form className={Styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
        />
        <label htmlFor="inStock">
          <input
            id="inStock"
            type="checkbox"
            checked={this.props.isStockOnly}
          />
          <span> Only show products in stock</span>
        </label>
      </form>
    );
  }
}
