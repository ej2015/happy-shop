import { connect } from "react-redux"
import CategoryFilter from '../components/CategoryFilter' 
import { fetchProducts } from '../actions/products'
import { setCategoryFilter, setSelectedItems, fetchCategories } from '../actions/categories'

const mapStateToProps = state => ({
  categories: state.category.items,
  selectedCategories: state.category.selectedItems
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    handleClick:
      (e, data) => { 
        e.stopPropagation()
        dispatch(setCategoryFilter(data.name))
        dispatch(setSelectedItems(data.id))
        dispatch(fetchProducts())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter)
