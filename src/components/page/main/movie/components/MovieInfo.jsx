import React from 'react'
import YouTube from 'react-youtube';

import MoviesDetails from './MoviesDetails'

const MovieInfo = ({ movie, trailer }) => {
  const opts = {
    height: '300',
  }

  return (
    <div className="movie-info">
      <div className="movie-info__left-side">
        {movie.poster_path === null || movie.poster_path === undefined ? <img className="movie-info__no-load-image" src={require('../../../../../img/iconfinder_23.Videos_290127.svg')} alt="poster" />
          : <img className="movie-info__image" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" />}
      </div>
      <div className="movie-info__center-side">
        {trailer !== '' ? <YouTube className='youTube' opts={opts} videoId={`${trailer}`} /> : ''}
        <h2 className="movie-info__title">{movie.title || movie.name}</h2>
        <p className="movie-info__overview">{movie.overview}</p>
      </div>
      <div className="movie-info__right-side">
        <MoviesDetails movie={movie} />
      </div>
    </div>
  )
}

export default MovieInfo