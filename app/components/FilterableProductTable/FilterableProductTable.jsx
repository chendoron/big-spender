import React from 'react';
import PropTypes from 'prop-types';
import Styles from './FilterableProductTable.scss';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ProductTable from './components/ProductTable/ProductTable.jsx';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isStockOnly: false,
    };

    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.onStockOnlyChange = this.onStockOnlyChange.bind(this);
  }

  static get propTypes() {
    return {
      user: PropTypes.object,
      products: PropTypes.array.isRequired,
    };
  }

  onFilterTextChange(newFilterText) {
    this.setState({ filterText: newFilterText });
  }

  onStockOnlyChange() {
    this.setState({ isStockOnly: !this.state.isStockOnly });
  }

  render() {
    return (
      <div className={Styles.filterableProductTable}>
        <SearchBar />
        <ProductTable
          products={this.props.products}
        />
      </div>
    );
  }
}
