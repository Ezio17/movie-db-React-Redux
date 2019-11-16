import { moviesConstants } from '../constants/index'

const setMovies = (movies, page) => ({
  type: moviesConstants.GET_MOVIES,
  payload: {
    movies,
    page
  },
})

const isLoading = loading => ({
  type: moviesConstants.IS_LOADING,
  payload: loading,
})

export const setSelectValue = value => ({
  type: moviesConstants.SELECTE_VALUE,
  payload: value
})

export const setValue = value => ({
  type: moviesConstants.SEARCH_VALUE,
  payload: value
})

export const getMovies = (genre, movie, page = 1) => dispatch => {
  let movies = (movie === '/movies/' ? '/movie/' : movie)

  fetch(`https://api.themoviedb.org/3${movies}${genre}?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&page=${page}`)
    .then(res => res.json())
    .then(movies => {
      dispatch(setMovies(movies.results, movies.total_pages))
      dispatch(isLoading(true))
    })
}

export const getSelecteMovies = (option = '', movie, genre, page = 1) => dispatch => {
  if (option.value === 'Все') {
    return dispatch(getMovies(genre, movie, page))
  }

  let movies = (movie === '/movies/' ? '/movie/' : movie);

  fetch(`https://api.themoviedb.org/3/discover${movies}?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&with_genres=${option.value}&page=${page}`)
    .then(res => res.json())
    .then(movies => {
      dispatch(setMovies(movies.results, movies.total_pages))
    })
}

export const getTvSearch = (query, page = 1) => dispatch => {
  if (query === '') {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&page=1`)
      .then(res => res.json())
      .then(movies => {
        dispatch(setMovies(movies.results, movies.total_pages))
      })

    return
  }

  fetch(`https://api.themoviedb.org/3/search/tv?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&query=${query}&page=${page}`)
    .then(res => res.json())
    .then(movies => {
      dispatch(setMovies(movies.results, movies.total_pages))
    })
}