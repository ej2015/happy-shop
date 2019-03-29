export const PRICE_FILTERS = {
  SET_PRICE_FILTER: 'SET_PRICE_FILTER'
}

export const setPriceFilter = (filter, checked) => (
  {
  type: PRICE_FILTERS.SET_PRICE_FILTER,
  filter,
  checked
})
