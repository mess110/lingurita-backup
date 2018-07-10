import { combineReducers } from 'redux'
import { reducer as burgerMenu } from 'redux-burger-menu'

import counter from './counter'
import history from './history'
import item from './item'
import search from './search'

export default combineReducers({
  burgerMenu,
  counter,
  history,
  item,
  search,
})
