import { combineReducers } from 'redux'

import counter from './counter'
import search from './search'
import { reducer as burgerMenu } from 'redux-burger-menu'

export default combineReducers({
  search,
  counter,
  burgerMenu,
})
