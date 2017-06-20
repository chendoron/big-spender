import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './ProductTable.scss';
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow.jsx';
import ProductRow from './ProductRow/ProductRow.jsx';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableRows = this.createRows();
  }

  static get propTypes() {
    return {
      products: PropTypes.array.isRequired,
      filterText: PropTypes.string.isRequired,
      isStockOnly: PropTypes.bool.isRequired,
    };
  }

  createRows(props = this.props) {
    let lastCategory;
    const tableRows = [];
    props.products
      .sort((a, b) => a.category.localeCompare(b.category))
      .forEach((product) => {
        // Filter our by text
        if (product.name
              .toLowerCase()
              .indexOf(props.filterText) === -1) return;

        // Filter our by stocked
        if (props.isStockOnly && !product.stocked) return;

        // Create category row for new categories
        if (product.category !== lastCategory) {
          tableRows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category}
            />);
        }

        // Create row for each product
        tableRows.push(
          <ProductRow
            product={product}
            key={product.name}
          />);
        lastCategory = product.category;
      });

    return tableRows;
  }

  componentWillReceiveProps(nextProps) {
    this.tableRows = this.createRows(nextProps);
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

export default connect(state => ({
  products: state.products,
  filterText: state.filterText,
  isStockOnly: state.isStockOnly,
}))(ProductTable);
