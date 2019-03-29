import React from 'react'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Home from './containers/Home'

export const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App
