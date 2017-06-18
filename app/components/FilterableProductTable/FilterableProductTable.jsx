import React from 'react';
import Styles from './FilterableProductTable.scss';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ProductTable from './components/ProductTable/ProductTable.jsx';

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
