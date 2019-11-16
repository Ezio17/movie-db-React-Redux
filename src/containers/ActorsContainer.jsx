import React from "react";
import { connect } from "react-redux";
import queryString from 'query-string'

import Actors from "../components/page/main/actors/Actors";
import { getActors, setValue, getSearchActors } from "../actions/actors";

class ActorsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.pageChange = this.pageChange.bind(this);
    this.changeInput = this.changeInput.bind(this)
  }

  componentDidMount() {
    this.props.getActors(queryString.parse(this.props.location.search).page);
  }

  componentWillUnmount() {
    this.props.setValue('')
  }

  changeInput(e) {
    this.props.getSearchActors(e.target.value)
    this.props.setValue(e.target.value)

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?page=${1}`,
    })
  }

  pageChange(data) {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?page=${data.selected + 1}`,
    })

    if (this.props.searchValue !== '') {
      this.props.getSearchActors(this.props.searchValue, data.selected + 1)

      return
    }

    this.props.getActors(data.selected + 1)
  }

  render() {
    return (
      <Actors
        searchValue={this.props.searchValue}
        pageChange={this.pageChange}
        actors={this.props.actors}
        page={this.props.page}
        setValue={this.props.setValue}
        getSearchActors={this.props.getSearchActors}
        changeInput={this.changeInput}
        currentPage={queryString.parse(this.props.location.search).page}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  actors: state.actors.actors,
  page: state.actors.page,
  searchValue: state.actors.searchValue,
  isLoading: state.actors.isLoading
});

const mapDispatchToProps = dispatch => ({
  getActors: page => dispatch(getActors(page)),
  setValue: value => dispatch(setValue(value)),
  getSearchActors: (value, page) => dispatch(getSearchActors(value, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActorsContainer);
