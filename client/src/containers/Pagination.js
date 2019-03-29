import { connect } from "react-redux";
import Pagination from '../components/Pagination' 
import { fetchProducts } from '../actions/products'
import { setActivePage, changePerPageDisplay } from '../actions/pagination'

const mapStateToProps = state => ({
  activePage: state.pagination.activePage,
  totalPages: state.pagination.totalPages,
  perPage: state.pagination.perPage
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handlePerPageChange:
      (e, data) => {
        dispatch(changePerPageDisplay(data.value))
      },
    handlePageChange:
      (e, data) => { 
        dispatch(setActivePage(data.activePage))
        dispatch(fetchProducts())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
