import React from 'react'
import { Image, Header, Container, Button, Icon } from 'semantic-ui-react'
import Breadcrumb from './BreadCrumb'

const Price = price_cents => (
  <div className='bold text-center'>
    ${price_cents / 100}
  </div>
)

const ProductDetails = ({ product, handleBackButtonClick }) => {
  const attr = product.attributes
  return (<Container>
    <Breadcrumb
      crumbs={product.attributes.named_category_paths[0]}
    />
    <Image src={attr.photo} />
    <Header as='h3' className='text-center'> {attr.name} </Header>
    <div className='text-center'>
      {attr.brand_name}
    </div>
    {Price(attr.price_cents)}
    <hr />
    <div>
      {attr.description}
    </div>
    <hr />
    <Button
      icon labelPosition='left'
      onClick={() => handleBackButtonClick()}
    > <Icon name='angle left' />
      Back
        </Button>
  </Container>)
}

export default ProductDetails
