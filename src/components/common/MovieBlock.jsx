import React from 'react'
import {Link} from 'react-router-dom'

const MovieBlock = props => (
    <div className="movie-block">
        {props.movies.map(movie => (
         movie.adult === false ? 
       <div key={movie.id} className="movie-block__container">
         <Link to={`/movie/${movie.id}`}>
          {movie.poster_path === null ? <img className="search-movies__image" src={require('../../img/iconfinder_23.Videos_290127.svg')} alt="movies-poster"/> 
          : <img src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt="movie" className="movie-block__image"/>  }
          </Link> 
          <Link to={`/movie/${movie.id}`}>
            <h4>{movie.title || movie.name}</h4>
          </Link>       
      </div> : 
      <div key={movie.id} className="movie-block__container">
        <Link to={`/tv/id/${movie.id}`}>
          {movie.poster_path === null ? <img className="search-movies__image" src={require('../../img/iconfinder_23.Videos_290127.svg')} alt="movies-poster"/> 
        : <img src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt="movie" className="movie-block__image"/>   }
        </Link> 
        <Link to={`/tv/id/${movie.id}`}>
          <h4>{movie.title || movie.name}</h4>
        </Link>  
     </div>
        ))}
        {props.mainPage &&  <Link to={`${props.genre}/${props.to}`}>
           <div className="movie-block__more">
             <p>Посмотреть все</p>
          </div>
        </Link>}
    </div>
)

export default MovieBlock