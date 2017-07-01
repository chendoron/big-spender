/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import BalanceSheet from './BalanceSheet/BalanceSheet.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';


const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

export default function App() {
  return (
      <Provider store={store}>
        <BalanceSheet />
      </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
