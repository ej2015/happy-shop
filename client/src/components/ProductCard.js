import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import { titleize } from '../helpers/helpers'

const Price = (price_cents) => (
  <div className='bold'>
    ${price_cents / 100}
  </div>
)

const ProductCard = ({ product, handleClick }) => {
  const attr = product.attributes
  return (<Grid.Column>
    <Card
      onClick={() => handleClick(product.id)}
    >
      <Image src={attr.photo} />
      <Card.Content>
        <Card.Header> {attr.brand_name} </Card.Header>
        <Card.Meta>
          {titleize(attr.name)}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {Price(attr.price_cents)}
      </Card.Content>
    </Card>
  </Grid.Column>)
}

export default ProductCard
