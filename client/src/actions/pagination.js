import { fetchProducts } from './products'

export const PAGINATIONS = {
  SET_TOTAL_NO_OF_PAGES: 'SET_TOTAL_NO_Of_PAGES',
  SET_ACTIVE_PAGE: 'SET_ACTIVE_PAGE',
  SET_PER_PAGE: 'SET_PER_PAGE',
  CHAGNGE_PER_PAGE_DISPLAY: 'CHAGNGE_PER_PAGE_DISPLAY'
}

export const setTotalNoOfPages = (totalNoOfPages) => (
  {
    type: PAGINATIONS.SET_TOTAL_NO_OF_PAGES,
    payload: totalNoOfPages
  }
)

export const setActivePage = (activePage) => (
  {
    type: PAGINATIONS.SET_ACTIVE_PAGE,
    payload: activePage,
  }
)

export const setPerPage = (perPage) => {
  return {
    type: PAGINATIONS.SET_PER_PAGE,
    payload: perPage,
  }
}

export const changePerPageDisplay = (perPage) => {
  return (dispatch, getState) => { 
    dispatch(setPerPage(perPage))
    dispatch(fetchProducts())
  }
}


