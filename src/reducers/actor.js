import { actorConstants } from '../constants/index'

const initialState = {
  isLoading: false,
  actor: [],
  movies: [],
}

const actor = (state = initialState, action) => {
  switch (action.type) {
    case actorConstants.GET_ACTOR:
      return {
        ...state,
        actor: action.payload.actor,
        movies: action.payload.movies
      }

    case actorConstants.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default actor