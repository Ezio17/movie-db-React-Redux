import React from 'react'
import { connect } from 'react-redux'

import Home from '../components/page/main/main/Home'
import { getRecomadationMovies } from '../actions/recomadation'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.getMovies();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <Home
        popular={this.props.popular}
        cinema={this.props.cinema}
        top={this.props.top}
        upcoming={this.props.upcoming}
        tv={this.props.tv}
        width={this.state.width}
        isLoading={this.props.isLoading}
      />
    )
  }
}

const mapStateToProps = state => ({
  popular: state.recomadation.popular,
  cinema: state.recomadation.cinema,
  top: state.recomadation.top,
  upcoming: state.recomadation.upcoming,
  tv: state.recomadation.tv,
  isLoading: state.recomadation.isLoading
})

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getRecomadationMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)