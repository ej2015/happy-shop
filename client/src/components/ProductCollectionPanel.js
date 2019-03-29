import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import VisibleProducts from '../containers/VisibleProducts'
import Pagination from '../containers/Pagination'
import Sorter from '../containers/Sorter'

const ProductCollectionPanel = () => (
  <Container>
    <Grid columns={2}>
      <Grid.Row>
        <Sorter />
        <Pagination />
      </Grid.Row>
    </Grid>
    <VisibleProducts />
  </Container>
)

export default ProductCollectionPanel
