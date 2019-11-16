import { searchConstants, moviesConstants } from '../constants/index'

export const searchValue = (value) => ({
  type: searchConstants.SEARCH_INPUT,
  payload: value
})

export const clickShowAll = (movies, pages) => {
  return ({
    type: searchConstants.SHOW_ALL,
    payload: {
      movies,
      pages
    },
  })
}

const isLoading = loading => ({
  type: moviesConstants.IS_LOADING,
  payload: loading,
})

export const setSearchMovies = movies => ({
  type: searchConstants.SEARCH_MOVIES,
  payload: movies
})

export const hiddenMoviesBlock = () => ({
  type: searchConstants.HIDDEN_MOVIES,
  payload: {
    inputValue: '',
    movies: []
  }
})

export const getSearchMovies = search => dispatch => {
  if (search.trim() === '') {
    dispatch(setSearchMovies([]))
    return
  }

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&query=${search}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(movies => {
      dispatch(setSearchMovies(movies.results))
    })
}

export const getAllSearchMovie = (query, page = 1) => dispatch => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&query=${query}&page=${page}&include_adult=false`)
    .then(res => res.json())
    .then(movies => {
      dispatch(clickShowAll(movies.results, movies.total_pages))
      dispatch(isLoading(true))
    })
}