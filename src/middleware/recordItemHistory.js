import { LOAD_ITEM } from '../modules/item'

export const LOCAL_STORAGE_HISTORY_KEY = 'linguritaHistory'

const recordItemHistory = (store) => (next) => (action) => {
  if (action.type === LOAD_ITEM) {
    var hist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_HISTORY_KEY) || '[]')
    hist.push({
      code: action.item.code,
      name: action.item.name,
      timestamp: Date.now()
    })
    localStorage.setItem(LOCAL_STORAGE_HISTORY_KEY, JSON.stringify(hist))
  }
  return next(action)
}

export default recordItemHistory
