import { LOCAL_STORAGE_HISTORY_KEY } from '../middleware/recordItemHistory'

export const LOAD = 'history/LOAD'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD:
      return {
        ...state,
        items: action.items
      }

    default:
      return state
  }
}

export const loadHistory = (code) => {
  return dispatch => {
    var items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_HISTORY_KEY) || '[]').reverse()
    dispatch({
      type: LOAD,
      items: items
    })
  }
}
