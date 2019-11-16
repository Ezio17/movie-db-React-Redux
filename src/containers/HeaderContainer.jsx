import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/page/header/Header'
import { searchValue, getSearchMovies, hiddenMoviesBlock, getAllSearchMovie } from '../actions/search'

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showHamburgerMenu: false,
    }

    this.resize = this.resize.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showAllSearchMovies = this.showAllSearchMovies.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    document.addEventListener('mousedown', this.handleClick);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    document.removeEventListener('mousedown', this.handleClick);
  }

  showAllSearchMovies() {
    this.props.hiddenMoviesBlock();
    this.props.getAllSearchMovie(this.props.value)
  }

  resize() {
    if (window.innerWidth <= 570) {
      this.setState({ showHamburgerMenu: true });
    } else {
      this.setState({ showHamburgerMenu: false });
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.hiddenMoviesBlock();
    }
  }

  render() {
    return (
      <Header
        value={this.props.value}
        searchValue={this.props.searchValue}
        showHamburgerMenu={this.state.showHamburgerMenu}
        getSearchMovies={this.props.getSearchMovies}
        movies={this.props.movies}
        setRef={this.setWrapperRef}
        showSearchMovies={this.showAllSearchMovies}
      />
    )
  }
}

const mapStateToProps = state => {
  return ({
    value: state.search.inputValue,
    movies: state.search.movies !== undefined ? state.search.movies.splice(0, 5) : [],
    allMovies: state.search.serachAllMovies,
  })
};

const mapDispatchToProps = dispatch => ({
  searchValue: (e) => dispatch(searchValue(e.target.value)),
  getSearchMovies: (search) => dispatch(getSearchMovies(search)),
  hiddenMoviesBlock: () => dispatch(hiddenMoviesBlock()),
  getAllSearchMovie: (query, page) => dispatch(getAllSearchMovie(query, page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)