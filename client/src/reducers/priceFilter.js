import { PRICE_FILTERS } from '../actions/priceFilter'

export const PriceFilterOptions = {
  '0_2500': '0-2500',
  '2500_5000': '2500-5000',
  '5000_7500': '5000-7500',
  '7500_10000': '7500-10000'
}

export const initialState = Object.values(PriceFilterOptions)

const priceFilter = (state = initialState, action) => {
  //console.log('action: ' + JSON.stringify(action))
  switch (action.type) {
    case PRICE_FILTERS.SET_PRICE_FILTER:
      let new_state = Array.from(state)
      if(action.checked)
        new_state.push(action.filter)
      else
        new_state = new_state.filter( item => item !== action.filter)
      //console.log('new_state: ' + new_state)
      return new_state
    default:
      return state
  }
}

export default priceFilter
