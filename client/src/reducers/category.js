import { CATEGORIES } from '../actions/categories'

export const initialState = {
  items: [],
  loading: false,
  error: null,
  selectedItems: []
}

export default function categoryReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case CATEGORIES.FETCH_CATEGORIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case CATEGORIES.FETCH_CATEGORIES_SUCCESS:
      let selected = state.selectedItems.length === 0 ? [action.payload[0].name] : state.selectedItems 
      return {
        ...state,
        loading: false,
        items: action.payload,
        selectedItems: selected 
      }
    case CATEGORIES.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CATEGORIES.SET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.payload
      }
    default:
      return state
  }
}
