import { moviesConstants } from '../constants/index'

const initialState = {
  movies: [],
  page: null,
  searchValue: '',
  select: 'Все',
  isLoading: false
}

const movies = (state = initialState, action) => {
  switch (action.type) {
    case moviesConstants.GET_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        page: action.payload.page
      }

    case moviesConstants.SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }

    case moviesConstants.SELECTE_VALUE:
      return {
        ...state,
        select: action.payload
      }

    case moviesConstants.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default movies