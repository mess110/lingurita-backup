export const Q_CHANGE = 'search/Q_CHANGE'

const initialState = {
  // q: '5941442006654',
  q: '',
  history: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case Q_CHANGE:
      return {
        ...state,
        q: action.q
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
