import { actorsConstants } from "../constants/index";

const setActors = (actors, page) => {
  return ({
    type: actorsConstants.GET_ACTORS,
    payload: {
      actors: actors,
      page
    }
  })
};

const isLoading = loading => ({
  type: actorsConstants.IS_LOADING,
  payload: loading,
})

export const setValue = value => ({
  type: actorsConstants.SEARCH_VALUE,
  payload: value
})

export const getActors = (page = 1) => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&page=${page}`
  )
    .then(res => res.json())
    .then(actors => {
      dispatch(setActors(actors.results, actors.total_pages))
      dispatch(isLoading(true))
    });
};

export const getSearchActors = (query, page = 1) => dispatch => {
  if (query === '') {
    dispatch(getActors())
    return
  }

  fetch(`https://api.themoviedb.org/3/search/person?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&query=${query}&page=${page}&include_adult=false`)
    .then(res => res.json())
    .then(actors => {
      dispatch(setActors(actors.results, actors.total_pages))
    })
}
