import { movieConstants } from '../constants/index'

const initialState = {
  movie: [],
  similarMovie: [],
  actors: [],
  trailer: '',
  isLoading: false,
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case movieConstants.GET_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
        similarMovie: action.payload.similarMovie,
        actors: action.payload.actors,
        trailer: action.payload.trailer
      }

    case movieConstants.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default movie