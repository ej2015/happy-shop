import React from 'react'
import { chunk } from 'lodash'
import { Grid, Container } from 'semantic-ui-react'
import ProductRow from './ProductRow'

const numberOfProductPerRow = 3

const rowGenerator = (chuncks, handleClick) => (
  chuncks.map((chunk, i) => (
    <ProductRow
      key={i}
      products={chunk}
      handleClick={handleClick}
    />
  ))
)

const ProductGrid = ({ products, handleClick }) => {
  if (!products || products.length === 0)
    return <Container textAlign='center'>No products found.</Container>

  const chunkedProducts = chunk(products, numberOfProductPerRow)
  return (
    <div>
      <Grid columns={numberOfProductPerRow}>
        {rowGenerator(chunkedProducts, handleClick)}
      </Grid>
    </div>
  )
}

export default ProductGrid
