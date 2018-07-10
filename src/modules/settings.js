export const TEASPOON_GRAMS_CHANGE = 'settings/TEASPOON_GRAMS_CHANGE'
export const TOGGLE_RECORD_HISTORY = 'settings/TOGGLE_RECORD_HISTORY'

const initialState = {
  teaSpoonGrams: 5,
  recordHistory: true,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case TEASPOON_GRAMS_CHANGE:
      return {
        ...state,
        teaSpoonGrams: action.teaSpoonGrams
      }

    case TOGGLE_RECORD_HISTORY:
      return {
        ...state,
        recordHistory: action.recordHistory,
      }

    default:
      return state
  }
}

export const teaSpoonGramsChange = (e) => {
  return dispatch => {
    dispatch({
      type: TEASPOON_GRAMS_CHANGE,
      teaSpoonGrams: e.target.value
    })
  }
}

export const toggleRecordHistory = (e) => {
  return dispatch => {
    dispatch({
      type: TOGGLE_RECORD_HISTORY,
      recordHistory: e.target.checked
    })
  }
}
