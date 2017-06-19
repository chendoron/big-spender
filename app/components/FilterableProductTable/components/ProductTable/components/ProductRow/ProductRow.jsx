import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ProductRow.scss';

export default class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.product = props.product;
  }

  static get propTypes() {
    return { product: PropTypes.object.isRequired };
  }

  render() {
    return (
      <div className={Styles.tableProductRow }>
        <div className={`${Styles.tableProductColumn} ${this.product.stocked ? '' : Styles.outOfStock}`}>{this.product.name}</div>
        <div className={Styles.tableProductColumn}>{this.product.price}</div>
      </div>
    );
  }
}
