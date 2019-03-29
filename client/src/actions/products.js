import axios from 'axios'
import qs from 'qs'
import { setTotalNoOfPages } from './pagination'
import { PRODUCT_DETAILS } from './productDetails'

export const PRODUCTS = {
  FETCH_PRODUCTS_BEGIN: 'FETCH_PRODUCTS_BEGIN',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE'
}

export function fetchProducts() {
  return (dispatch, getState) => {
    dispatch(fetchProductsBegin());
    const { priceFilter, categoryFilter, pagination, sorter } = getState()
    const path =  '/api/products'
    const opts = {
      params: {
        category: categoryFilter,
        prices: priceFilter,
        page: pagination.activePage,
        per: pagination.perPage,
        sort: sorter.selected
      },
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      }
    }
    return axios.get(path, opts)
      .then(res => {
        let json = res.data
        dispatch(fetchProductsSuccess({products: json.data, sort: getState().sorter.selected}))
        dispatch(setTotalNoOfPages(json.meta.total))
        dispatch(showProductGrid())
        return json.data;
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error))
        return error
      })
  }
}

export const fetchProductsBegin = () => ({
  type: PRODUCTS.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = ({products, sort}) => {
  //const order = sort[0] === '-' ? -1 : 1
  //sort = sort.replace('-', '')
  //products.sort( (p, q) => order * ( p.attributes[sort] - q.attributes[sort] ) ) 
  return {
    type: PRODUCTS.FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = error => ({
  type: PRODUCTS.FETCH_PRODUCTS_FAILURE,
  payload: error
})

export const showProductGrid = () => ({
  type: PRODUCT_DETAILS.HIDE
})

