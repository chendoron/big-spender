/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome.jsx';
import Clock from './clock.jsx';
import List from './list.jsx';
import NameForm from './name-form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.mock = props.mock;
  }

  render() {
    return (
      <div>
        <Welcome user={this.user} />
        <Clock />
        <List listItems={[1, 2, 3, 4, 5, 6]} />
        <NameForm />
      </div>
    );
  }
}

const user = {
  firstName: 'Chen',
  lastName: 'Doron',
};

const mock = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

ReactDOM.render(<App user={user} mock={mock} />, document.getElementById('app'));
