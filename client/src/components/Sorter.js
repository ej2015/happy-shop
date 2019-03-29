import React from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'

export const dropdown = {
  price_cents: 'Price: Low to High',
  '-price_cents': 'Price: High to Low'
}

const sortOptions = Object.keys(dropdown).map((order, index) => ({
  key: order,
  text: dropdown[order],
  value: order,
}))

const sorter = ({selected, handleChange}) => (

    <Grid.Column width={5}>
  <Dropdown 
    placeholder='Sort...' 
    selection 
    options={sortOptions}
    defaultValue={selected}
    onChange={handleChange}
  />
  </Grid.Column>
)

export default sorter

