import { LOAD_ITEM } from '../modules/item'
import { TOGGLE_RECORD_HISTORY } from '../modules/settings'

const recordItemHistory = (store) => (next) => (action) => {
  if (action.type === TOGGLE_RECORD_HISTORY) {
    store.getState().search.history = []
  }

  if (action.type === LOAD_ITEM) {
    var state = store.getState()
    if (state.settings.recordHistory) {
      state.search.history.splice(0, 0, {
        code: action.item.code,
        name: action.item.name,
        timestamp: Date.now()
      })

      state.search.history = state.search.history.splice(0, 20)
    }
  }
  return next(action)
}

export default recordItemHistory
