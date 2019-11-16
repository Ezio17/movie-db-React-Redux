import React from 'react'
import { Link } from 'react-router-dom'

import Title from './Title'
import MovieBlock from './MovieBlock'

const Recomadation = props => {
  return (
    <section className="recomadation">
      <Link to={`/${props.genre}/${props.to}`}>
        <Title>{props.title}</Title>
      </Link>
      <MovieBlock genre={props.genre} mainPage={props.mainPage} movies={props.movies} to={props.to} />
    </section>
  )
}

export default Recomadation