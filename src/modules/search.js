export const SELECT = 'search/SELECT'
export const LOADING = 'search/LOADING'
export const Q_CHANGE = 'search/Q_CHANGE'

const initialState = {
  // q: '5941442006654',
  q: '',
  item: {},
  loaded: false,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        item: action.item,
        loaded: true
      }

    case LOADING:
      return {
        ...state,
        loading: true
      }

    case Q_CHANGE:
      return {
        ...state,
        q: action.q
      }

    default:
      return state
  }
}

export const selectItem = (code) => {
  return dispatch => {
    dispatch({
      type: LOADING,
    })
    var url = 'https://json.northpole.ro/write_only_storage.json?api_key=lingurita&secret=81cc6b0c14e5c4fa11f51f3bad1123f7&lingurita_type=item&code=' + code
    fetch(url).then((response) => response.json()).then(function(myJson) {
      dispatch({
        type: SELECT,
        item: myJson[0] || {},
        loaded: true
      })
    })
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
