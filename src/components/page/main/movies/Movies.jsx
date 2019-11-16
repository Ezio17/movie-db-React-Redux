import React from 'react'
import ReactPaginate from 'react-paginate';
import { DebounceInput } from 'react-debounce-input';
import Select from 'react-select';

import MovieBlock from '../../../common/MovieBlock'
import Title from '../../../common/Title'
import { options } from '../../../../data/index'
import Loading from '../../../common/Loading'

const Movies = props => {
  const initialPage = props.currentPage !== undefined ? +props.currentPage - 1 : 0
  return (
    <main className='movies'>
      {props.isLoading ? <>
        <Title>{props.title}</Title>
        {props.searchMovies !== true && <div className='movies__search-wrapper'>
          <div className='movies__select-wrapper'>
            <span className="movies__search-title">Жанр:</span>
            <Select
              options={options}
              value={props.select}
              onChange={props.selectChange}
              className='movies__select'
            />
          </div>
          {props.search && <>
            <label className="movies__search-title">
              Найти сериал:
              <DebounceInput
                onChange={(e) => {
                  props.inputChange(e)
                }}
                value={props.value}
                type="text"
                placeholder='Найти сериал'
                className='movies__search-input'
                debounceTimeout={500}
              />
            </label>
          </>
          }
        </div>
        }
        }
      {props.movies.length === 0 ? <p className='center-mode'>По запросу ничего не найдено</p> :
          <MovieBlock genre={props.genre} mainPage={props.mainPage} movies={props.movies} to={props.to} />
        }
        {props.page > 1 && props.movies.length !== 0 &&
          <ReactPaginate
            pageCount={props.page}
            initialPage={initialPage}
            forcePage={initialPage}
            previousLabel="<"
            nextLabel=">"
            onPageChange={props.pageChange}
            containerClassName={'pagination'}
            activeLinkClassName={'pagination__active-page'}
            pageLinkClassName={'pagination__page-links'}
            previousClassName={'pagination__previous-arrow'}
            nextClassName={'pagination__next-arrow'}
          />}
      </> : <Loading width={150} height={150} />}

    </main>
  )
}


export default Movies