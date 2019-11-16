import { movieConstants } from "../constants/index";

const isLoading = loading => ({
  type: movieConstants.IS_LOADING,
  payload: loading,
})

const setMovie = movie => {
  let TrailerKey = movie[3].results;
  const getTrailerKey =
    TrailerKey.length !== 0
      ? TrailerKey.filter(trailer => trailer.type === "Trailer")[0].key
      : "";
  return {
    type: movieConstants.GET_MOVIE,
    payload: {
      movie: movie[0],
      similarMovie: movie[1].results.splice(0, 7),
      actors: movie[2].cast.filter(actor => actor.order < 14),
      trailer: getTrailerKey
    }
  };
};

export const getMovie = (id, genre) => dispatch => {
  dispatch(isLoading(false))
  Promise.all([
    fetch(
      `https://api.themoviedb.org/3${genre}${id}?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru`
    ),
    fetch(
      `https://api.themoviedb.org/3${genre}${id}/similar?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3${genre}${id}/credits?api_key=29574201b32259e0b6282b3bb21eb28c`
    ),
    fetch(
      `https://api.themoviedb.org/3${genre}${id}/videos?api_key=29574201b32259e0b6282b3bb21eb28c&language=ru`
    )
  ])
    .then(response => Promise.all(response.map(res => res.json())))
    .then(movie => {
      dispatch(setMovie(movie))
      dispatch(isLoading(true))
    });
};

