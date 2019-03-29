export const SORTER = {
  SET_SELECTED: 'SORTER_SET_SELECTED',
}

export const setSorterSelected = (selected) => (
  {
    type: SORTER.SET_SELECTED,
    payload: selected
  }
)


