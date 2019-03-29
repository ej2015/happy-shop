import { SORTER } from '../actions/sorter'
import { dropdown } from '../components/Sorter'

export const initialState = { selected: Object.keys(dropdown)[0] }

export default function sorterReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case SORTER.SET_SELECTED:
      return {
        ...state,
        selected: action.payload
      }
    default:
      return state;
  }
}

