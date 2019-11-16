import React from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'

import Movies from '../components/page/main/movies/Movies'
import { getMovies, setValue, getTvSearch, setSelectValue, getSelecteMovies } from '../actions/movies'
import { getAllSearchMovie } from '../actions/search'
import { setTitle } from '../data/index'

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      searchMovies: false,
    }

    this.pageChange = this.pageChange.bind(this)
    this.setTitle = this.setTitle.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  componentDidMount() {
    if (queryString.parse(this.props.location.search).query !== undefined) {
      this.props.getAllSearchMovie(queryString.parse(this.props.location.search).query)

      return this.setState({
        title: 'По поиску: ' + queryString.parse(this.props.location.search).query,
        searchMovies: true
      })
    }

    this.props.getMovies(this.props.match.params.genre, this.props.match.url.match('/\\w+/')[0], queryString.parse(this.props.location.search).page
    );

    this.setTitle()
  }

  componentDidUpdate(prevProps) {
    if ('По поиску: ' + queryString.parse(this.props.location.search).query !== this.state.title &&
      queryString.parse(this.props.location.search).query !== undefined
    ) {
      this.props.getAllSearchMovie(queryString.parse(this.props.location.search).query)
      return this.setState({
        title: 'По поиску: ' + queryString.parse(this.props.location.search).query,
      })
    }

    if (prevProps.location.pathname !== this.props.location.pathname ||
      queryString.parse(prevProps.location.search).page !== queryString.parse(this.props.location.search).page) {

      this.props.getMovies(this.props.match.params.genre, this.props.match.url.match('/\\w+/')[0], queryString.parse(this.props.location.search).page);
      this.props.setValue('')
      this.setTitle()
      this.props.setSelectValue('Все')
    }
  }

  componentWillUnmount() {
    this.props.setValue('')
    this.props.setSelectValue('Все')
  }

  setTitle() {
    let rusTitle = setTitle(this.props.match.params.genre);

    if (this.props.match.url.match('/\\w+/')[0] === '/tv/') {
      rusTitle = setTitle(this.props.match.params.genre) + ' сериалы'
    }

    this.setState({
      title: rusTitle,
    })
  }

  pageChange(data) {
    if (queryString.parse(this.props.location.search).query !== undefined) {
      this.props.getAllSearchMovie(queryString.parse(this.props.location.search).query, data.selected + 1)
      return
    }

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?page=${data.selected + 1}`,
    })

    if (this.props.searchValue !== '') {
      this.props.getTvSearch(this.props.searchValue, data.selected + 1)

      return
    }

    if (this.props.select !== 'Все') {
      this.props.getSelecteMovies(this.props.select, this.props.match.url.match('/\\w+/')[0], this.props.match.params.genre, data.selected + 1)
      return
    }

    if (data.selected !== + queryString.parse(this.props.location.search).page - 1) {
      this.props.getMovies(this.props.match.params.genre, this.props.match.url.match('/\\w+/')[0], data.selected + 1)
    }
  }

  inputChange(e) {
    this.props.setValue(e.target.value)
    this.props.getTvSearch(e.target.value)

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?page=${1}`,
    })
  }

  selectChange(value) {
    this.props.setSelectValue(value)
    this.props.getSelecteMovies(value, this.props.match.url.match('/\\w+/')[0], this.props.match.params.genre)
    this.props.setValue('')

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?page=${1}`,
    })
  }

  render() {
    return (
      <Movies
        title={this.state.title}
        pageChange={this.pageChange}
        page={queryString.parse(this.props.location.search).query !== undefined ? this.props.searchPage : this.props.page}
        movies={queryString.parse(this.props.location.search).query !== undefined ? this.props.searchMovies : this.props.movies}
        currentPage={queryString.parse(this.props.location.search).page}
        search={this.props.location.pathname === '/tv/popular' && true}
        value={this.props.searchValue}
        select={this.props.select}
        selectChange={this.selectChange}
        inputChange={this.inputChange}
        searchMovies={this.state.searchMovies}
        isLoading={this.props.isLoading}
      />
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  page: state.movies.page,
  searchMovies: state.search.serachAllMovies,
  searchPage: state.search.page,
  searchValue: state.movies.searchValue,
  select: state.movies.select,
  isLoading: state.movies.isLoading
})

const mapDispatchToprops = dispatch => ({
  getMovies: (genre, movie, page) => dispatch(getMovies(genre, movie, page)),
  getAllSearchMovie: (query, page) => dispatch(getAllSearchMovie(query, page)),
  setValue: (value) => dispatch(setValue(value)),
  getTvSearch: (query, page) => dispatch(getTvSearch(query, page)),
  setSelectValue: value => dispatch(setSelectValue(value)),
  getSelecteMovies: (option, movie, genre, page) => dispatch(getSelecteMovies(option, movie, genre, page)),
})

export default connect(mapStateToProps, mapDispatchToprops)(MoviesContainer)