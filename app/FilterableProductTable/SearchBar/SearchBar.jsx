import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Styles from './SearchBar.scss';

class SearchBar extends React.Component {
  static get propTypes() {
    return {
      filterText: PropTypes.string.isRequired,
      isStockOnly: PropTypes.bool.isRequired,
      filterTextChange: PropTypes.func.isRequired,
      stockOnlyChange: PropTypes.func.isRequired,
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
}), actions)(SearchBar);
