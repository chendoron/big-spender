import React from 'react';
import Styles from './FilterableProductTable.scss';
import SearchBar from './SearchBar/SearchBar.jsx';
import ProductTable from './ProductTable/ProductTable.jsx';

export default function FilterProductTable() {
  return (
    <div className={Styles.filterableProductTable}>
      <SearchBar />
      <ProductTable />
    </div>
  );
}
