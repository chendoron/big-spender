import React from 'react';
import Styles from './ProductTable.scss';
import ProductCategoryRow from './components/product-category-row/product-category-row.jsx';
import ProductRow from './components/product-row/product-row.jsx';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.tableRows = [];
    let lastCategory;
    props.products
      .sort((a, b) => a.category.localeCompare(b.category))
      .forEach((product) => {
        if (product.category !== lastCategory) {
          this.tableRows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }

        this.tableRows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
      });
  }

  render() {
    return (
      <div className={Styles.productTable}>
        <div className={Styles.tableHeaderRow}>
          <div>Name</div>
          <div>Price</div>
        </div>
       {this.tableRows}
      </div>
    );
  }
}
