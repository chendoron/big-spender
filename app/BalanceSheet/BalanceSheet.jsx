import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './BalanceSheet.scss';
// import SearchBar from './SearchBar/SearchBar.jsx';
// import ProductTable from './ProductTable/ProductTable.jsx';

class BalanceSheet extends React.Component {
  constructor(props) {
    super(props);
    this.balanceSheet = props.transactions.reduce((accumulator, transaction) => {
      if (transaction.amount > 0) {
        return {
          expenses: accumulator.expenses,
          incomes: accumulator.incomes + transaction.amount,
        };
      }

      return {
        expenses: accumulator.expenses + transaction.amount,
        incomes: accumulator.incomes,
      };
    }, {
      expenses: 0,
      incomes: 0,
    });

    console.log(this.balanceSheet);
  }

  static get propTypes() {
    return {
      transactions: PropTypes.array.isRequired,
    };
  }

  render() {
    return (
      <div className={Styles.filterableProductTable}>
        {JSON.stringify(this.balanceSheet)}
      </div>
    );
  }
}

export default connect(state => ({
  transactions: state.transactions,
}))(BalanceSheet);
