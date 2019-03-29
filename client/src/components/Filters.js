import React  from 'react'
import { Container } from 'semantic-ui-react'
import PriceFilter from '../containers/PriceFilter'
import CategoryFilter from '../containers/CategoryFilter'

const Filters = () => {
  return(
    <Container>
      <CategoryFilter />
      <PriceFilter />
    </Container>
  )

}

export default Filters
