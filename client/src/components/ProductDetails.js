import React from 'react'
import { Image, Header, Container, Button, Icon } from 'semantic-ui-react'
import Breadcrumb from './BreadCrumb'

const Price = (price_cents, promoted_price) => (
  <div className='bold text-center'>
    ${promoted_price > 0 }
    ? <OriginalPrice
        price = {price_cents}
      />
    : <PromotedPrice
        price = {price_cents}
        promoted_price = {promoted_price}
      />
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
