export const LOAD = 'item/LOAD'
export const LOADING = 'item/LOADING'

const initialState = {
  item: {},
  loaded: false,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        item: action.item,
        loaded: true,
        loading: false
      }

    case LOADING:
      return {
        ...state,
        loaded: false,
        loading: true
      }

    default:
      return state
  }
}

export const loadItem = (code) => {
  return dispatch => {
    dispatch({
      type: LOADING,
    })
    var url = 'https://json.northpole.ro/write_only_storage.json?api_key=lingurita&secret=81cc6b0c14e5c4fa11f51f3bad1123f7&lingurita_type=item&code=' + code
    fetch(url).then((response) => response.json()).then(function(myJson) {
      dispatch({
        type: LOAD,
        item: myJson[0] || {},
      })
    })
  }
}
