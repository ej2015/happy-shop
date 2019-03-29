import { combineReducers } from 'redux'
import priceFilter from './priceFilter'
import categoryFilter from './categoryFilter'
import category from './category'
import products from './products'
import pagination from './pagination'
import sorter from './sorter'
import productDetails from './productDetails'

export default combineReducers({
  priceFilter,
  categoryFilter,
  products,
  category,
  pagination,
  sorter,
  productDetails
})
