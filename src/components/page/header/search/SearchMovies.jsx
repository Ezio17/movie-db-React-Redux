import React from 'react'
import { Link } from 'react-router-dom'

const SearchMovies = props => (
  <div ref={props.setRef}>
    {props.movies.length !== 0 ? <>
      {props.movies.map(movie => (
        <div className="search-movies" key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            {movie.poster_path === null ?
              <img className="search-movies__image" src={require('../../../../img/iconfinder_23.Videos_290127.svg')} alt="movies-poster" />
              : <img className="search-movies__image" src={`http://image.tmdb.org/t/p/w92/${movie.poster_path}`} alt="movies-poster" />}
          </Link>
          <Link to={`/movie/${movie.id}`} className="search-movies__link">
            <h3>{movie.title}</h3>
          </Link>
          <p className="search-movies__date">{movie.release_date === undefined ? '-' : movie.release_date.split('').splice(0, 4).join('')}</p>
        </div>
      ))}
      <div className='search-movies__all-movies'>
        <Link
          to={`/movies/search?query=${props.search}`}
          onClick={props.showSearchMovies}
        >
          <p>Показать все</p>
        </Link>
      </div>
    </> :
      <p className='not-found-movies'>К сожалению, по введенному вами запросу ничего не найдено.</p>
    }
  </div>
)

export default SearchMovies