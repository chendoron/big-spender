import React from 'react';
import Styles from './FilterableProductTable.scss';
import SearchBar from './components/search-bar/search-bar.jsx';
import ProductTable from './components/product-table/product-table.jsx';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.products = props.products;
  }

  render() {
    return (
      <div className={ Styles.filterableProductTable }>
        <SearchBar />
        <ProductTable products={ this.products } />
      </div>
    );
  }
}
