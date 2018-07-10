import { combineReducers } from 'redux'

import counter from './counter'
import item from './item'
import search from './search'
import { reducer as burgerMenu } from 'redux-burger-menu'

export default combineReducers({
  search,
  item,
  counter,
  burgerMenu,
})
