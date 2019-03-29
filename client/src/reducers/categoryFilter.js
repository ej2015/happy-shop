import { CATEGORIES } from '../actions/categories'

export const initialState = null

export default function categoryReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case CATEGORIES.SET_CATEGORY_FILTER:
      return action.payload
    default:
      return state
  }
}
