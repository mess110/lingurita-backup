export const LOAD_ITEM = 'item/LOAD_ITEM'

const initialState = {
  found: false,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEM:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}

export const loadItem = () => {
  return dispatch => {
    dispatch({
      type: LOAD_ITEM
    })
  }
}
