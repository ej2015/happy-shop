import { connect } from "react-redux"
import { fetchProductDetails } from '../actions/productDetails'
import { fetchProducts } from '../actions/products'
import VisibleProducts from '../components/VisibleProducts'

const mapStateToProps = state => ({
  perPage: state.pagination.perPage,
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  productDetail: state.productDetails.item
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    handleClick: (id) => dispatch(fetchProductDetails(id)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleProducts)
