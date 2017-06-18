import React from 'react';
import Styles from './ProductRow.scss';

export default class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.product = props.product;
  }

  render() {
    return (
      <div className={Styles.tableProductRow }>
        <div className={Styles.tableProductColumn}>{this.product.name}</div>
        <div className={Styles.tableProductColumn}>{this.product.price}</div>
      </div>
    );
  }
}
