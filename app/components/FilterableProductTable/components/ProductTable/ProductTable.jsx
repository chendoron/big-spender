import React from 'react';
import PropTypes from 'prop-types';
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
        // Filter our by text
        if (product.name.indexOf(this.props.filterText) === -1) return;

        // Filter our by stocked
        if (this.props.isStockOnly && !product.stocked) return;

        // Create category row for new categories
        if (product.category !== lastCategory) {
          this.tableRows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category}
            />);
        }

        // Create row for each product
        this.tableRows.push(
          <ProductRow
            product={product}
            key={product.name}
          />);
        lastCategory = product.category;
      });
  }

  static get propTypes() {
    return {
      products: PropTypes.array.isRequired,
      filterText: PropTypes.string.isRequired,
      isStockOnly: PropTypes.bool.isRequired,
    };
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
