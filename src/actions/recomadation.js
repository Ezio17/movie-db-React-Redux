import { recomadationConstants } from '../constants/index'

const isLoading = loading => ({
  type: recomadationConstants.IS_LOADING,
  payload: loading,
})

const setMovies = (movies) => {
  return ({
    type: recomadationConstants.SET_MOVIES,
    payload: {
      popular: movies[0].results,
      cinema: movies[1].results,
      top: movies[2].results,
      upcoming: movies[4].results,
      tv: movies[3].results
    }
  })
}

export const getRecomadationMovies = () => dispatch => {
  dispatch(isLoading(false))
  Promise.all([
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&page=1"),
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&page=1"),
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&page=1"),
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&page=1"),
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&page=1"),

  ]).then(response => Promise.all(response.map(res => res.json())))
    .then(movie => {
      dispatch(setMovies(movie))
      dispatch(isLoading(true))
    })
}

