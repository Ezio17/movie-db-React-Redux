import React from 'react'
import { connect } from 'react-redux'

import Actor from '../components/page/main/actor/Actor'
import { getActor } from '../actions/actor'

class ActorContainer extends React.Component {
  componentDidMount() {
    this.props.getActor(this.props.match.params.id)
  }

  render() {
    return (
      <Actor movies={this.props.movies} actor={this.props.actor} isLoading={this.props.isLoading} />
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.actor.isLoading,
  actor: state.actor.actor,
  movies: state.actor.movies,
})

const mapDispatchtoProps = dispatch => ({
  getActor: id => dispatch(getActor(id))
})

export default connect(mapStateToProps, mapDispatchtoProps)(ActorContainer)