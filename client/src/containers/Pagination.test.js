import React from 'react'
import { Provider } from 'react-redux'
import Enzyme, { shallow, mount, unmount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import ProductPagination from './Pagination'
import { Pagination, Dropdown, Grid } from 'semantic-ui-react'

Enzyme.configure({ adapter: new Adapter() })
const mockStore = configureStore()
let wrapper
let store

export const initialState = { 
  pagination: {
    activePage: 2, 
    totalPages: 3,
    perPage: 6
  }
}

beforeEach(() => {
  store = mockStore(initialState)
  wrapper = mount(<Provider store={store}><ProductPagination/></Provider>)
})

afterEach(()=> {
  wrapper.unmount()
})

//fails, possibly related to https://github.com/airbnb/enzyme/issues/1973
describe('connected components', () => {
  describe('Pagination', () => {

    it('should set active page', () => {
      expect(wrapper.find("a[aria-current=true]").props().value).toEqual(2)
    })


  })
})

    
