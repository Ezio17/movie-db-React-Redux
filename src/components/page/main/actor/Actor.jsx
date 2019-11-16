import React from 'react'

import MovieBlock from '../../../common/MovieBlock'
import Loading from '../../../common/Loading'

const Actor = props => {
  const { actor } = props
  return (
    <main className='actor'>
      {props.isLoading ? <>
        <div className="actor__main-block">
          {actor.profile_path !== null ?
            <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt={actor.name} className='actor__image' />
            : <img src={require("../../../../img/No_person.jpg")} alt={actor.name} />
          }
          <div className="actor__biography">
            <h2>{actor.name}</h2>
            <p>{actor.deathday !== null ? `${actor.birthday}/${actor.deathday}` : actor.birthday !== null && actor.birthday}</p>
            {actor.biography !== '' && <p>{actor.biography}</p>}
          </div>
        </div>
        {props.movies.length !== 0 && <div className="actor__movies">
          <h3 className='similar__title'>Главные фильмы актера {props.actor.name}:</h3>
          <MovieBlock movies={props.movies} />
        </div>}
      </> : <Loading width={150} height={150} />}
    </main>
  )
}

export default Actor