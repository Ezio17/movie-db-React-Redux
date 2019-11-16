import React from 'react'

import MovieBlock from '../../../../common/MovieBlock'

const SimilarMovie = props => (
  props.similarMovie.length > 0 && <div className="similar">
  <h3 className="similar__title">Смотрите также</h3>
  <div className="similar__block">
    <MovieBlock movies={props.similarMovie}/>
  </div>
</div>
)

export default SimilarMovie