import React from "react";

import MovieInfo from "./components/MovieInfo";
import SimilarMovie from "./components/SimilarMovie";
import ActorsBlock from "../../../common/ActorBlock";
import Loading from '../../../common/Loading'

const Movie = props => {
  return (
    <main className="movie">
      {props.isLoading ? <>
        <MovieInfo movie={props.movie} trailer={props.trailer} />
        {props.actors.length > 0 && <div>
          <h3 className="movie__actors-title">Актёры</h3>
          <ActorsBlock actors={props.actors} />
        </div>}
        <SimilarMovie similarMovie={props.similarMovie} /></> :
        <Loading width={150} height={150} />
      }
    </main>
  );
}

export default Movie;
