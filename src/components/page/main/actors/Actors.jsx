import React from "react";
import ReactPaginate from "react-paginate";
import { DebounceInput } from 'react-debounce-input';

import ActorBlock from "../../../common/ActorBlock";
import Title from "../../../common/Title";
import Loadnig from '../../../common/Loading'

const Actors = props => {
  const initialPage = props.currentPage !== undefined ? +props.currentPage - 1 : 0
  return (
    <main className="actors">
      {props.isLoading ? <>
        <Title>Актёры</Title>
        <div className='actors__search-wrapper'>
          <p className="actors__search-title">Найти актёра:</p>
          <DebounceInput
            onChange={(e) => {
              props.changeInput(e)
            }}
            value={props.searchValue}
            type="text"
            placeholder='Найти актёра'
            className='actors__search-input'
            debounceTimeout={500}
          />
        </div>
        {props.actors.length === 0 ? <p className='center-mode'>По запросу ничего не найдено</p> : <>
          <ActorBlock actors={props.actors} />
          {props.page > 1 && (
            <ReactPaginate
              pageCount={props.page}
              initialPage={initialPage}
              forcePage={initialPage}
              previousLabel="<"
              nextLabel=">"
              disableInitialCallback={false}
              onPageChange={props.pageChange}
              containerClassName={"pagination"}
              activeLinkClassName={"pagination__active-page"}
              pageLinkClassName={"pagination__page-links"}
              previousClassName={"pagination__previous-arrow"}
              nextClassName={"pagination__next-arrow"}
            />
          )}
        </>
        }
      </> : <Loadnig height={150} width={150} />}
    </main>
  );
};

export default Actors;
