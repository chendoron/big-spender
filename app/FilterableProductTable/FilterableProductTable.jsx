import React from 'react';
import PropTypes from 'prop-types';
import Styles from './FilterableProductTable.scss';
import SearchBar from './SearchBar/SearchBar.jsx';
import ProductTable from './ProductTable/ProductTable.jsx';

export default class FilterableProductTable extends React.Component {
  static get propTypes() {
    return {
      user: PropTypes.object,
    };
  }

  render() {
    return (
      <div className={Styles.filterableProductTable}>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}
