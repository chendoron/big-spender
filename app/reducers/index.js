import transactions from '../assets/transactions.json';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'FILTER_TEXT_CHANGE':
      return { ...state, filterText: action.filterText };
    case 'STOCK_ONLY_CHANGE':
      return { ...state, isStockOnly: action.isStockOnly };
    default:
      return {
        products: [
          { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
          { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
          { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
          { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
          { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
          { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
        ],
        filterText: '',
        isStockOnly: false,
        transactions,
      };
  }
}
