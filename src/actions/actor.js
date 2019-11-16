import { actorConstants } from '../constants/index'

const setActor = (actor) => ({
  type: actorConstants.GET_ACTOR,
  payload: {
    actor: actor[0],
    movies: actor[1].cast.sort((a, b) => b['popularity'] - a['popularity']).splice(0, 7),
  }
})

const isLoading = loading => ({
  type: actorConstants.IS_LOADING,
  payload: loading,
})



export const getActor = id => dispatch => {
  dispatch(isLoading(false))
  Promise.all([
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru`),
    fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru`)
  ])
    .then(response => Promise.all(response.map(res => res.json())))
    .then(actor => {
      dispatch(setActor(actor))
      dispatch(isLoading(true))
    });
}