import React from 'react'
import { Image, Header, Container, Button } from 'semantic-ui-react'
import  Breadcrumb from './BreadCrumb'

const Price = price_cents => (
  <div className='bold'>
    ${price_cents / 100}
  </div>
)

const ProductDetails = ({ product, handleBackButtonClick }) => {
  const attr = product.attributes
  return (<Container>
    <Breadcrumb
        crumbs = {product.attributes.named_category_paths[0]}
      />
    <Image src={attr.photo} />
    <Header as='h3'> {attr.name} </Header>
    <div>
      {attr.brand_name}
    </div>
    {Price(attr.price_cents)}
          <Button
      onClick={() => handleBackButtonClick()}
    > Back
        </Button>
  </Container>)
}

export default ProductDetails
