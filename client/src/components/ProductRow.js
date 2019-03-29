import React from 'react'
import { Grid } from 'semantic-ui-react'
import ProductCard from './ProductCard'

const ProductRow = ({products, handleClick}) => (
  <Grid.Row>
    {products.map((product) => (
      <ProductCard 
        key={product.id}
        product={product}
        handleClick={handleClick}
      />
    ))}
  </Grid.Row>
)

export default ProductRow
