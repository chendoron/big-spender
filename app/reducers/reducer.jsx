export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'FILTER_TEXT_CHANGE':
      return { isStockOnly: state.isStockOnly, filterText: action.filterText };
    case 'STOCK_ONLY_CHANGE':
      return { filterText: state.filterText, isStockOnly: action.isStockOnly };
    default:
      return {
        filterText: '',
        isStockOnly: false,
      };
  }
}
