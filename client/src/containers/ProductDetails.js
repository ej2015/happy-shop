import { connect } from 'react-redux'
import ProductDetails from '../components/ProductDetails'
import { showProductGrid } from '../actions/products'

const mapStateToProps = state => ({
  product: state.productDetails.item
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleBackButtonClick: () => dispatch(showProductGrid()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
