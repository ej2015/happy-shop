import { PRODUCT_DETAILS } from '../actions/productDetails'

export const initialState = { 
  item: {}, 
  visible: false,
  error: null
}

export default function productDetailsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case PRODUCT_DETAILS.SHOW:
      return {
        ...state,
        visible: true
      }
    case PRODUCT_DETAILS.HIDE:
      return {
        ...state,
        visible: false
      }
    case PRODUCT_DETAILS.FETCH_SUCCESS:
      return {
        ...state,
        item: action.payload,
        visible: true
      }
    case PRODUCT_DETAILS.FETCH_FAILURE:
      return {
        ...state,
        visible: false,
        error: action.payload
      }
    default:
      return state
  }
}

