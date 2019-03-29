import { PAGINATIONS } from '../actions/pagination'

export const initialState = { 
  activePage: 1, 
  totalPages: 3,
  perPage: 6
}

export default function paginationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case PAGINATIONS.SET_TOTAL_NO_OF_PAGES:
      return {
        ...state,
        totalPages: action.payload
      }
    case PAGINATIONS.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload
      }
    case PAGINATIONS.SET_PER_PAGE:
      return {
        ...state,
        perPage: action.payload
      }
    default:
      return state
  }
}
