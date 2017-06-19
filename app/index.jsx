/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer.jsx';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable.jsx';

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

const store = createStore(reducer);

// Print state changes
store.subscribe(() => console.log(store.getState()));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.products = props.products;
  }

  static get propTypes() {
    return {
      user: PropTypes.object,
      products: PropTypes.array.isRequired,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <FilterableProductTable products={this.products} />
      </Provider>
    );
  }
}

ReactDOM.render(<App user={user} products={products} />, document.getElementById('root'));
