import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ProductCategoryRow.scss';

export default class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
    this.category = props.category;
  }

  static get propTypes() {
    return { category: PropTypes.string.isRequired };
  }

  render() {
    return (
      <div className={Styles.tableCategoryRow}>{this.category}</div>
    );
  }
}
