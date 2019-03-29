import  { setPriceFilter, PRICE_FILTERS } from './priceFilter'
import {setSelectedItems, fetchCategoriesBegin, fetchCategoriesSuccess, fetchCategoriesFailure, setCategoryFilter, CATEGORIES } from './categories'
import { setTotalNoOfPages, setActivePage, setPerPage, PAGINATIONS } from './pagination'
import { setSorterSelected, SORTER } from './sorter'
import { fetchProductsBegin, fetchProductsSuccess, fetchProductsFailure, showProductGrid, PRODUCTS } from './products'
import { fetchProductDetailsBegin, fetchProductDetailsSuccess, fetchProductDetailsFailure, PRODUCT_DETAILS } from './productDetails'

describe('setPriceFilter', () => {
  it('should create a filter and checked options', () => {
    const filter = '0-25'
    const checked = false
    const expectedAction = {
      type: PRICE_FILTERS.SET_PRICE_FILTER,
      filter,
      checked
    }
    expect(setPriceFilter(filter, checked)).toEqual(expectedAction)
  })
})

describe('setSelectedItems', () => {
  it('should set array payload', () => {
    const selected = 'a/b/c'
    const expectedAction = {
      type: CATEGORIES.SET_SELECTED_ITEMS,
      payload: ['a', 'b', 'c']
    }
    expect(setSelectedItems(selected)).toEqual(expectedAction)
  })
})

describe('fetchCategoriesBegin', () => {
  it('should set right type', () => {
    const expectedAction = {
      type: CATEGORIES.FETCH_CATEGORIES_BEGIN,
    }
    expect(fetchCategoriesBegin()).toEqual(expectedAction)
  })
})

describe('fetchCategoriesSuccess', () => {
  it('should set payload categories', () => {
    const categories = 'aa'
    const expectedAction = {
      type: CATEGORIES.FETCH_CATEGORIES_SUCCESS,
      payload: categories
    }
    expect(fetchCategoriesSuccess(categories)).toEqual(expectedAction)
  })
})

describe('fetchCategoriesFailure', () => {
  it('should set payload error', () => {
    const error = 'aa'
    const expectedAction = {
      type: CATEGORIES.FETCH_CATEGORIES_FAILURE,
      payload: error
    }
    expect(fetchCategoriesFailure(error)).toEqual(expectedAction)
  })
})

describe('setCategoryFilter', () => {
  it('should set filter', () => {
    const filter = 'aa'
    const expectedAction = {
      type: CATEGORIES.SET_CATEGORY_FILTER,
      payload: filter
    }
    expect(setCategoryFilter(filter)).toEqual(expectedAction)
  })
})

describe('setTotalNoOfPages', () => {
  it('should set payload', () => {
    const payload = 'aa'
    const expectedAction = {
      type: PAGINATIONS.SET_TOTAL_NO_OF_PAGES,
      payload: payload
    }
    expect(setTotalNoOfPages(payload)).toEqual(expectedAction)
  })
})

describe('setActivePage', () => {
  it('should set payload', () => {
    const payload = 'aa'
    const expectedAction = {
      type: PAGINATIONS.SET_ACTIVE_PAGE,
      payload: payload
    }
    expect(setActivePage(payload)).toEqual(expectedAction)
  })
})

describe('setPerPage', () => {
  it('should set payload', () => {
    const payload = 'aa'
    const expectedAction = {
      type: PAGINATIONS.SET_PER_PAGE,
      payload: payload
    }
    expect(setPerPage(payload)).toEqual(expectedAction)
  })
})

describe('setSorterSelected', () => {
  it('should set payload', () => {
    const payload = 'aa'
    const expectedAction = {
      type: SORTER.SET_SELECTED,
      payload: payload
    }
    expect(setSorterSelected(payload)).toEqual(expectedAction)
  })
})

describe('fetchProductsBegin', () => {
  it('should set type', () => {
    const expectedAction = {
      type: PRODUCTS.FETCH_PRODUCTS_BEGIN
    }
    expect(fetchProductsBegin()).toEqual(expectedAction)
  })
})

describe('fetchProductsSuccess', () => {
  it('should set payload', () => {
    const products = ['aa', 'bb']
    const sort = 'price_cents'
    const expectedAction = {
      type: PRODUCTS.FETCH_PRODUCTS_SUCCESS,
      payload: products
    }
    expect(fetchProductsSuccess({products, sort})).toEqual(expectedAction)
  })
})

describe('fetchProductsFailure', () => {
  it('should set payload', () => {
    const payload = 'aa'
    const expectedAction = {
      type: PRODUCTS.FETCH_PRODUCTS_FAILURE,
      payload: payload
    }
    expect(fetchProductsFailure(payload)).toEqual(expectedAction)
  })
})

describe('showProductGrid', () => {
  it('should set type', () => {
    const expectedAction = {
      type: PRODUCT_DETAILS.HIDE
    }
    expect(showProductGrid()).toEqual(expectedAction)
  })
})

describe('fetchProductDetailsBegin', () => {
  it('should set type', () => {
    const expectedAction = {
      type: PRODUCT_DETAILS.FETCH_BEGIN
    }
    expect(fetchProductDetailsBegin()).toEqual(expectedAction)
  })
})

describe('fetchProductDetailsSuccess', () => {
  it('should set payload', () => {
    const payload = 'aa'
    const expectedAction = {
      type: PRODUCT_DETAILS.FETCH_SUCCESS,
      payload: payload
    }
    expect(fetchProductDetailsSuccess(payload)).toEqual(expectedAction)
  })
})

describe('fetchProductDetailsFailure', () => {
  it('should set payload', () => {
    const payload = 'aa'
    const expectedAction = {
      type: PRODUCT_DETAILS.FETCH_FAILURE,
      payload: payload
    }
    expect(fetchProductDetailsFailure(payload)).toEqual(expectedAction)
  })
})

