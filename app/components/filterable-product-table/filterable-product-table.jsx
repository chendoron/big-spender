import React from 'react';
import Styles from './filterable-product-table.scss';
import SearchBar from './components/search-bar/search-bar.jsx';
import ProductTable from './components/product-table/product-table.jsx';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.products = props.products;
    console.log(Styles);
  }

  render() {
    // return (
    //   <div className={ Styles.filterableProductTable }>
    //     <SearchBar />
    //     <ProductTable products={ this.products } />
    //   </div>
    // );
    return pug`(
      div(className={ Styles.filterableProductTable }
        SearchBar
        ProductTable(products={ this.products })
    `;
  }
}
