import axios from 'axios'

export const CATEGORIES = {
  FETCH_CATEGORIES_BEGIN: 'CATEGORIES_FETCH_CATEGORIES_BEGIN',
  FETCH_CATEGORIES_SUCCESS: 'CATEGRIES_FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILURE: 'CATEGORIES_FETCH_CATEGORIES_FAILURE',
  SET_CATEGORY_FILTER: 'CATEGORIES_SET_CATEGORY_FILTER',
  SET_SELECTED_ITEMS: 'CATEGORIES_SET_SELECTED_ITEMS',
}

export function fetchCategories() {
  return (dispatch, getState) => {
    dispatch(fetchCategoriesBegin())
    const path =  '/api/categories'
    return axios.get(path)
      .then(res => {
        dispatch(fetchCategoriesSuccess(res.data.data))
        return res.data.data;
      })
      .catch(error => {
        dispatch(fetchCategoriesFailure(error))
        return error
      })
  }
}

export const setSelectedItems = (selected) => {
  const categories = selected.split('/')
  return  {
  type: CATEGORIES.SET_SELECTED_ITEMS,
  payload: categories
}}

export const fetchCategoriesBegin = () => ({
  type: CATEGORIES.FETCH_CATEGORIES_BEGIN
})

export const fetchCategoriesSuccess = categories => ({
  type: CATEGORIES.FETCH_CATEGORIES_SUCCESS,
  payload: categories
})

export const fetchCategoriesFailure = error => ({
  type: CATEGORIES.FETCH_CATEGORIES_FAILURE,
  payload: error
})

export const setCategoryFilter = filter => (
  {
  type: CATEGORIES.SET_CATEGORY_FILTER,
  payload: filter
})
