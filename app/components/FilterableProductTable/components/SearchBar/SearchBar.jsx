import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SearchBar.scss';

export default class SearchBar extends React.Component {
  static get propTypes() {
    return {
      filterText: PropTypes.string.isRequired,
      isStockOnly: PropTypes.bool.isRequired,
      onFilterTextChange: PropTypes.func,
      onStockOnlyChange: PropTypes.func,
    };
  }

  render() {
    return (
      <form className={Styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={event => this.props.onFilterTextChange(event.target.value)}
        />
        <label htmlFor="inStock">
          <input
            id="inStock"
            type="checkbox"
            checked={this.props.isStockOnly}
            onChange={event => this.props.onStockOnlyChange(event.target.checked)}
          />
          <span> Only show products in stock</span>
        </label>
      </form>
    );
  }
}
