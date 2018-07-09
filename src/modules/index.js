import { combineReducers } from 'redux'

import counter from './counter'
import { reducer as burgerMenu } from 'redux-burger-menu';

export default combineReducers({
  counter,
  burgerMenu,
})
