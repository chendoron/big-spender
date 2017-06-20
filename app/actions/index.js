export function filterTextChange(filterText) {
  return {
    type: 'FILTER_TEXT_CHANGE',
    filterText,
  };
}

export function stockOnlyChange(isStockOnly) {
  return {
    type: 'STOCK_ONLY_CHANGE',
    isStockOnly,
  };
}
