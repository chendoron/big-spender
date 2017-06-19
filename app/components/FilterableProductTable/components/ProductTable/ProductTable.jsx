import React from 'react';
import Styles from './ProductTable.scss';
import ProductCategoryRow from './components/ProductCategoryRow/ProductCategoryRow.jsx';
import ProductRow from './components/ProductRow/ProductRow.jsx';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.tableRows = [];
    let lastCategory;
    props.products
      .sort((a, b) => a.category.localeCompare(b.category))
      .forEach((product) => {
        if (product.category !== lastCategory) {
          const productCategoryRow = (
            <ProductCategoryRow
              category={product.category}
              key={product.category}
            />
          );
          this.tableRows.push(productCategoryRow);
        }

        this.tableRows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
      });
  }

  render() {
    return (
      <div className={Styles.productTable}>
        <div className={Styles.tableHeaderRow}>
          <div className={Styles.tableHeaderColumn}>Name</div>
          <div className={Styles.tableHeaderColumn}>Price</div>
        </div>
       {this.tableRows}
      </div>
    );
  }
}
