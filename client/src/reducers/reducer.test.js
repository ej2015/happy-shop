import sorter, { initialState as sorterInitialState } from './sorter'
import { SORTER } from '../actions/sorter'
import category, { initialState as categoryInitialState } from './category'
import { CATEGORIES } from '../actions/categories'
import categoryFilter, { initialState as categoryFilterInitialState } from './categoryFilter'
import pagination, { initialState as paginationInitialState } from './pagination'
import { PAGINATIONS } from '../actions/pagination'
import { PRICE_FILTERS } from '../actions/priceFilter'
import priceFilter, { initialState as priceFilterInitialState }  from './priceFilter'
import { PRODUCT_DETAILS } from '../actions/productDetails'
import productDetails, { initialState as productDetailsInitialState }  from './productDetails'
import { PRODUCTS } from "../actions/products";
import product, { initialState as productInitialState }  from './products'

describe('sorter reducer', () => {
  it('should return the initial state', () => {
    expect(sorter(undefined, {})).toEqual(
      sorterInitialState
    )
  })

  it('should handle SORTER.SET_SELECTED', () => {
    expect(
      sorter([], {
        type: SORTER.SET_SELECTED,
        payload: 'Run the tests'
      })
    ).toEqual(
      {
        selected: 'Run the tests',
      }
    )
  })
})

describe('category reducer', () => {
  it('should return the initial state', () => {
    expect(category(undefined, {})).toEqual(
      categoryInitialState
    )
  })

  it('should handle CATEGORIES.FETCH_CATEGORIES_BEGIN', () => {
    expect(
      category([], {
        type: CATEGORIES.FETCH_CATEGORIES_BEGIN
      })
    ).toEqual(
      {
        loading: true,
        error: null
      }
    )
  })
})

describe('category reducer', () => {
  it('should return the initial state', () => {
    expect(category(undefined, {})).toEqual(
      categoryInitialState
    )
  })

  it('should handle CATEGORIES.FETCH_CATEGORIES_BEGIN', () => {
    expect(
      category([], {
        type: CATEGORIES.FETCH_CATEGORIES_BEGIN
      })
    ).toEqual(
      {
        loading: true,
        error: null
      }
    )
  })
})

describe('categoryFilter reducer', () => {
  it('should return the initial state', () => {
    expect(categoryFilter(undefined, {})).toEqual(
      categoryFilterInitialState
    )
  })

  it('should handle CATEGORIES.SET_CATEGORY_FILTER', () => {
    expect(
      categoryFilter(null, {
        type: CATEGORIES.SET_CATEGORY_FILTER,
        payload: 'aaa'
      })
    ).toEqual( 'aaa' )
  })
})

describe('pagination reducer', () => {
  it('should return the initial state', () => {
    expect(pagination(undefined, {})).toEqual(
      paginationInitialState
    )
  })

  it('should handle SORTER.SET_SORTER_SELECTED', () => {
    expect(
      pagination([], {
        type: PAGINATIONS.SET_TOTAL_NO_OF_PAGES,
        payload: 4
      })
    ).toEqual(
      {
        totalPages: 4
      }
    )
  })

  it('should handle PAGINATIONS.SET_ACTIVE_PAGE', () => {
    expect(
      pagination([], {
        type: PAGINATIONS.SET_ACTIVE_PAGE,
        payload: 4
      })
    ).toEqual(
      {
        activePage: 4
      }
    )
  })

  it('should handle PAGINATIONS.SET_PER_PAGE', () => {
    expect(
      pagination([], {
        type: PAGINATIONS.SET_PER_PAGE,
        payload: 4
      })
    ).toEqual(
      {
        perPage: 4
      }
    )
  })
})

describe('priceFilter reducer', () => {
  it('should return the initial state', () => {
    expect(priceFilter(undefined, {})).toEqual(
      priceFilterInitialState
    )
  })

  it('should handle PRICE_FILTERS.SET_PRICE_FILTER to add price option', () => {
    expect(
      priceFilter([], {
        type: PRICE_FILTERS.SET_PRICE_FILTER,
        filter: '0-2500',
        checked: true
      })
    ).toEqual( ['0-2500'] )
  })

  it('should handle PRICE_FILTERS.SET_PRICE_FILTER to remove price option', () => {
    expect(
      priceFilter(['0-2500', '2500-5000'], {
        type: PRICE_FILTERS.SET_PRICE_FILTER,
        filter: '0-2500',
        checked: false
      })
    ).toEqual( ['2500-5000'] )
  })
})

describe('productDetailsFilter reducer', () => {
  it('should return the initial state', () => {
    expect(productDetails(undefined, {})).toEqual(
      productDetailsInitialState
    )
  })
  it('should handle PRODUCT_DETAILS.SHOW', () => {
    expect(
      productDetails([], {
        type: PRODUCT_DETAILS.SHOW
      })
    ).toEqual( { visible: true })
  })
  it('should handle PRODUCT_DETAILS.SHOW', () => {
    expect(
      productDetails([], {
        type: PRODUCT_DETAILS.HIDE
      })
    ).toEqual( { visible: false })
  })
  it('should handle PRODUCT_DETAILS.FETCH_SUCCESS', () => {
    expect(
      productDetails(null, {
        type: PRODUCT_DETAILS.FETCH_SUCCESS,
        payload: 'aaa'
      })
    ).toEqual( { item: 'aaa', visible: true })
  })
  it('should handle PRODUCT_DETAILS.FETCH_FAILURE', () => {
    expect(
      productDetails(null, {
        type: PRODUCT_DETAILS.FETCH_FAILURE,
        payload: 'aaa'
      })
    ).toEqual( { error: 'aaa', visible: false })
  })
})

describe('product reducer', () => {
  it('should return the initial state', () => {
    expect(product(undefined, {})).toEqual(
      productInitialState
    )
  })
  it('should handle PRODUCT_DETAILS.FETCH_BEGIN', () => {
    expect(
      product([], {
        type: PRODUCTS.FETCH_PRODUCTS_BEGIN
      })
    ).toEqual( { loading: true, error: null })
  })
  it('should handle PRODUCT_DETAILS.FETCH_SUCCESS', () => {
    expect(
      product(null, {
        type: PRODUCTS.FETCH_PRODUCTS_SUCCESS,
        payload: 'aaa'
      })
    ).toEqual( { items: 'aaa', loading: false })
  })
  it('should handle PRODUCT_DETAILS.FETCH_FAILURE', () => {
    expect(
      product(null, {
        type: PRODUCTS.FETCH_PRODUCTS_FAILURE,
        payload: 'aaa'
      })
    ).toEqual( { items: [], error: 'aaa', loading: false })
  })
})
