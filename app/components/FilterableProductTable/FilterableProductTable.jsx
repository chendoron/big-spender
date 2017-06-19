import React from 'react';
import PropTypes from 'prop-types';
import Styles from './FilterableProductTable.scss';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ProductTable from './components/ProductTable/ProductTable.jsx';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isStockOnly: false,
    };
  }

  static get propTypes() {
    return {
      user: PropTypes.object,
      products: PropTypes.array.isRequired,
    };
  }

  render() {
    return (
      <div className={Styles.filterableProductTable}>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
        />
      </div>
    );
  }
}
