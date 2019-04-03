import React from 'react'
import Enzyme, { shallow, mount, unmount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductPagination from './Pagination'
import { Pagination, Dropdown, Grid } from 'semantic-ui-react'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    activePage: 1,
    totalPages: 5,
    perPage: 3,
    handlePageChange: jest.fn(),
    handlePerPageChange: jest.fn()
  }
  const wrapper = shallow(<ProductPagination {...props}/>)
  
  return {
    props,
    wrapper
  }
}

describe('components', () => {
  describe('Pagination', () => {
    it('should render self and subcomponents', () => {
      const { wrapper } = setup()
      expect(wrapper.find(Pagination)).toHaveLength(1)
      expect(wrapper.find(Dropdown)).toHaveLength(1)
      expect(wrapper.find(Grid.Column)).toHaveLength(1)
    })
  })
})

    
