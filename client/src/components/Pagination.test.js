import React from 'react'
import Enzyme, { shallow, mount, unmount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductPagination from './Pagination'
import { Pagination, Dropdown, Grid } from 'semantic-ui-react'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    activePage: 2,
    totalPages: 5,
    perPage: 3,
    handlePageChange: jest.fn(),
    handlePerPageChange: jest.fn()
  }
  const wrapper = mount(<ProductPagination {...props}/>)
  
  return {
    props,
    wrapper
  }
}

describe('components', () => {
  describe('Pagination', () => {
    it('should render self and subcomponents', () => {
      const wrapper = shallow(<ProductPagination/>) 
      expect(wrapper.find(Pagination)).toHaveLength(1)
      expect(wrapper.find(Dropdown)).toHaveLength(1)
      expect(wrapper.find(Grid.Column)).toHaveLength(1)
    })

    it('should show correct number of pages', () => {
      const { wrapper } = setup()
      expect(wrapper.find("a[type='pageItem']")).toHaveLength(5)
      wrapper.unmount()
    })

    it('should set active page', () => {
      const { wrapper } = setup()
      expect(wrapper.find("a[aria-current=true]").props().value).toEqual(2)
      wrapper.unmount()
    })
  })
})

    
