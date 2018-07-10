import { combineReducers } from 'redux'
import { reducer as burgerMenu } from 'redux-burger-menu'

import counter from './counter'
import item from './item'
import search from './search'
import settings from './settings'

export default combineReducers({
  burgerMenu,
  counter,
  item,
  search,
  settings,
})
