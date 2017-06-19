import React from 'react';
import Styles from './ProductCategoryRow.scss';

export default class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
    this.category = props.category;
  }

  render() {
    return (
      <div className={Styles.tableCategoryRow}>{this.category}</div>
    );
  }
}
