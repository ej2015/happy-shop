import axios from 'axios'

export const PRODUCT_DETAILS = {
  FETCH_BEGIN: 'FETCH_PRODUCT_DETAILS_BEGIN',
  FETCH_SUCCESS: 'FETCH_PRODUCT_DETAILS_SUCCESS',
  FETCH_FAILURE: 'FETCH_PRODUCT_DETAILS_FAILURE',
  SHOW: 'FETCH_PRODUCT_DETAILS_SHOW',
  HIDE: 'FETCH_PRODUCT_DETAILS_HIDE'
}

export function fetchProductDetails(id) {
  return (dispatch, getState) => {
    dispatch(fetchProductDetailsBegin());
    const path =  '/api/products/' + id 

    return axios.get(path)
      .then(res => {
        let json = res.data
        dispatch(fetchProductDetailsSuccess(json.data))
      })
      .catch(error => {
        dispatch(fetchProductDetailsFailure(error))
      })
  }
}

export const fetchProductDetailsBegin = () => {
  return {
  type: PRODUCT_DETAILS.FETCH_BEGIN
}}

export const fetchProductDetailsSuccess = (product) => {
  return {
    type: PRODUCT_DETAILS.FETCH_SUCCESS,
    payload: product
  }
}

export const fetchProductDetailsFailure = error => ({
  type: PRODUCT_DETAILS.FETCH_FAILURE,
  payload: error
})
