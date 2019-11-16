import { searchConstants } from '../constants/index'

let initialState = {
  inputValue: '',
  movies: [],
  page: null,
  serachAllMovies: [],
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case searchConstants.SEARCH_INPUT:
      return {
        ...state,
        inputValue: action.payload
      };

    case searchConstants.SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      }

    case searchConstants.HIDDEN_MOVIES:
      return {
        ...state,
        ...action.payload
      }

    case searchConstants.SHOW_ALL:
      return {
        ...state,
        serachAllMovies: action.payload.movies,
        page: action.payload.pages
      }

    default:
      return state;
  }
}

export default search