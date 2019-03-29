import { connect } from 'react-redux'
import { setPriceFilter } from '../actions/priceFilter'
import PriceFilter from '../components/PriceFilter'
import { fetchProducts } from '../actions/products'

const mapStateToProps = state => ({
  priceFilter: state.priceFilter
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange:
      (e, data) => { 
        dispatch(setPriceFilter(data.value, data.checked))
        dispatch(fetchProducts())
      }
  }
}

const priceFilter = connect(mapStateToProps, mapDispatchToProps)(PriceFilter)

export default priceFilter



