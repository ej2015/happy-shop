import Sorter from '../components/Sorter'
import { setSorterSelected } from '../actions/sorter'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/products'

const mapStateToProps = state => ({
  selected: state.sorter.selected
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange:
      (e, data) => { 
        dispatch(setSorterSelected(data.value))
        dispatch(fetchProducts())
      }
  }
}

const sorter = connect(mapStateToProps, mapDispatchToProps)(Sorter)

export default sorter
