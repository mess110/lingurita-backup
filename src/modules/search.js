export const Q_CHANGE = 'search/Q_CHANGE'
export const LAST_Q_CHANGE = 'search/LAST_Q_CHANGE'

const initialState = {
  // q: '5941442006654',
  q: '',
  lastQ: '',
  history: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case Q_CHANGE:
      return {
        ...state,
        q: action.q
      }

    case LAST_Q_CHANGE:
      return {
        ...state,
        lastQ: action.lastQ
      }

    default:
      return state
  }
}

export const qChange = (e) => {
  return dispatch => {
    dispatch({
      type: Q_CHANGE,
      q: e.target.value
    })
  }
}

export const qReset = (e) => {
  return dispatch => {
    dispatch({
      type: Q_CHANGE,
      q: ''
    })
  }
}

export const lastQChange = (e) => {
  return dispatch => {
    dispatch({
      type: LAST_Q_CHANGE,
      lastQ: e.target.value
    })
  }
}
