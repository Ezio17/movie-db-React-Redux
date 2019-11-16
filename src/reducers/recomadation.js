import { recomadationConstants } from '../constants/index'

let initialState = {
  popular: [],
  cinema: [],
  top: [],
  upcoming: [],
  tv: [],
  isLoading: false
}

const recomadation = (state = initialState, action) => {
  switch (action.type) {
    case recomadationConstants.SET_MOVIES:
      return {
        ...state,
        popular: action.payload.popular,
        cinema: action.payload.cinema,
        top: action.payload.top,
        upcoming: action.payload.upcoming,
        tv: action.payload.tv,
      };

    case recomadationConstants.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state;
  }
}

export default recomadation