import { connect } from "react-redux";
import Home from '../components/Home' 

const mapStateToProps = state => ({
  showProductDetails: state.productDetails.visible
})

export default connect(mapStateToProps)(Home)
