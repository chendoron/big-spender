import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './SearchBar.scss';
import { filterTextChange, stockOnlyChange } from '../../../../actions/action';

class SearchBar extends React.Component {
  static get propTypes() {
    return {
      filterText: PropTypes.string,
      isStockOnly: PropTypes.bool,
      filterTextChange: PropTypes.func,
      stockOnlyChange: PropTypes.func,
    };
  }

  render() {
    return (
      <form className={Styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={event => this.props.filterTextChange(event.target.value)}
        />
        <label htmlFor="inStock">
          <input
            id="inStock"
            type="checkbox"
            checked={this.props.isStockOnly}
            onChange={event => this.props.stockOnlyChange(event.target.checked)}
          />
          <span> Only show products in stock</span>
        </label>
      </form>
    );
  }
}

export default connect(state => ({
  filterText: state.filterText,
  isStockOnly: state.isStockOnly,
}), { filterTextChange, stockOnlyChange })(SearchBar);
