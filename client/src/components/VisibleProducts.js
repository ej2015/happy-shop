import React, { Component } from 'react';
import { Container, Dimmer, Loader, Divider } from 'semantic-ui-react'
import ProductGrid from './ProductGrid'

class VisibleProducts extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { perPage, products, loading, error, handleClick } = this.props
    const visibleProducts = products.slice(0, perPage)

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return products
      ? <Container text>
        <Divider hidden section />
        <ProductGrid
          products={visibleProducts}
          handleClick={handleClick}
        />
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default VisibleProducts
