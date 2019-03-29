import React from 'react';
import '../App.css';
import { Grid, Container } from 'semantic-ui-react'
import Filters from './Filters'
import Header from './Header'
import ProductDetails from '../containers/ProductDetails'
import ProductCollectionPanel from '../components/ProductCollectionPanel'


const Home = ({ showProductDetails }) => (
  <Container>
    <Header />
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <Filters />
        </Grid.Column>
        <Grid.Column width={11}>
          {showProductDetails && <ProductDetails />}
          {!showProductDetails && <ProductCollectionPanel /> }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Home


