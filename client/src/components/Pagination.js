import React from 'react'
import { Grid, Pagination, Dropdown } from 'semantic-ui-react'

const perOptions = [3, 6, 9].map(
  num => ({
    key: num,
    text: num,
    value: num
  })
)

const ProductPagination = ({ activePage, totalPages, perPage, handlePageChange, handlePerPageChange }) => (
  <Grid.Column width={11}>
    <Dropdown
      className='mar-right-20'
      selection
      compact
      options={perOptions}
      defaultValue={perPage}
      onChange={handlePerPageChange}
    />
    <Pagination
      activePage={activePage}
      totalPages={totalPages}
      siblingRange={0}
      boundaryRange={1}
      onPageChange={handlePageChange}
    />
  </Grid.Column>
)

export default ProductPagination
