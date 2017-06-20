/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer.jsx';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable.jsx';

const user = {
  firstName: 'Chen',
  lastName: 'Doron',
};

const store = createStore(reducer);

// Print state changes
store.subscribe(() => console.log(store.getState()));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
  }

  static get propTypes() {
    return {
      user: PropTypes.object,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <FilterableProductTable />
      </Provider>
    );
  }
}

ReactDOM.render(<App user={user} />, document.getElementById('root'));
