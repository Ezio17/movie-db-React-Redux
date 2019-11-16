import React from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input';

import Nav from './navigation/Nav'
import BurgerMenu from './navigation/BurgerMenu'
import SearchMovies from './search/SearchMovies'
import { headerNav } from '../../../data/index'

const Header = props => {
  return (
    <header className='header'>
      <div className="header-container">
        <Link to='/'>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="logo" className='logo' />
        </Link>
        <div className='navigation-wrapper'>
          {props.showHamburgerMenu ? <BurgerMenu headerNav={headerNav} />
            :
            <Nav headerNav={headerNav} nameClass={'header__navigation'} />}
          <div className='input-image'>
            <DebounceInput
              debounceTimeout={600}
              placeholder='Найти фильм'
              className='input-image__input'
              value={props.value}
              onChange={(e) => {
                props.searchValue(e)
                props.getSearchMovies(e.target.value)
              }}
            />
            <img src={require('../../../img/iconfinder_icon-111-search_314478.svg')} alt="logo" className='input-image__image' />
            {props.value !== '' && <div className="input-image__search-movies">
              <SearchMovies isLoading={props.isLoading} showSearchMovies={props.showSearchMovies} search={props.value} setRef={props.setRef} movies={props.movies} />
            </div>}
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header