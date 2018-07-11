export const LOAD_ITEM = 'item/LOAD_ITEM'
export const LOAD_ITEMS = 'item/LOAD_ITEMS'
export const LOADING = 'item/LOADING'

const initialState = {
  item: {},
  items: [],
  loaded: false,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEM:
      return {
        ...state,
        item: action.item,
        loaded: true,
        loading: false,
      }

    case LOAD_ITEMS:
      return {
        ...state,
        items: action.items,
        loaded: true,
        loading: false,
      }

    case LOADING:
      return {
        ...state,
        loaded: false,
        loading: true,
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
        type: LOAD_ITEM,
        item: myJson[0] || { code: code },
      })
    })
  }
}

export const loadItems = (name) => {
  return dispatch => {
    dispatch({
      type: LOADING,
    })
    var url = 'https://json.northpole.ro/write_only_storage.json?api_key=lingurita&secret=81cc6b0c14e5c4fa11f51f3bad1123f7&lingurita_type=item&__limit=50&__regexi=name&name=' + name
    fetch(url).then((response) => response.json()).then(function(myJson) {
      dispatch({
        type: LOAD_ITEMS,
        items: myJson
      })
    })
  }
}
