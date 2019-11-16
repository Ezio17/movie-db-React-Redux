import React from "react";
import { connect } from "react-redux";

import Movie from "../components/page/main/movie/Movie";
import { getMovie } from "../actions/movie";

class MovieContainer extends React.Component {
  componentDidMount() {
    this.props.getMovie(
      this.props.match.params.id,
      this.props.match.url.match("/\\w+/")[0]
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getMovie(
        this.props.match.params.id,
        this.props.match.url.match("/\\w+/")[0]
      );
    }
  }

  render() {
    return (
      <Movie
        movie={this.props.movie}
        similarMovie={this.props.similarMovie}
        actors={this.props.actors}
        trailer={this.props.trailer}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProrps = state => ({
  movie: state.movie.movie,
  similarMovie: state.movie.similarMovie,
  actors: state.movie.actors,
  trailer: state.movie.trailer,
  isLoading: state.movie.isLoading
});

const mapDispatchToprops = dispatch => ({
  getMovie: (id, genre) => dispatch(getMovie(id, genre))
});

export default connect(mapStateToProrps, mapDispatchToprops)(MovieContainer);
