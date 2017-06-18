/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/filterable-product-table/filterable-product-table.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.products = props.products;
  }

  render() {
    return (
      <div>
        <FilterableProductTable products={ this.products } />
      </div>
    );
  }
}

const user = {
  firstName: 'Chen',
  lastName: 'Doron',
};

const products = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

ReactDOM.render(<App user={ user } products={ products } />, document.getElementById('root'));
