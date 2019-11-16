import React from 'react'

import Slider from '../../../common/Slider'
import Recomadation from '../../../common/Recomadation'
import Loading from '../../../common/Loading'

const Home = props => (
  <main className="home-page">
    {props.isLoading ? <>
      {props.width > 570 && <Slider />}
      <Recomadation genre={'movies'} mainPage={true} to={'popular'} movies={props.popular} title={'Популярные'} />
      <Recomadation genre={'movies'} mainPage={true} to={'top_rated'} movies={props.top} title={'Топ рейтинга'} />
      <Recomadation genre={'movies'} mainPage={true} to={'upcoming'} movies={props.upcoming} title={'Скоро выйдут'} />
      <Recomadation genre={'movies'} mainPage={true} to={'now_playing'} movies={props.cinema} title={'В кинотеатре'} />
      <Recomadation genre={'tv'} mainPage={true} to={'popular'} movies={props.tv} title={'Сериалы'} />}
    </>
      : <Loading height={150} width={150} />}
  </main>
)

export default Home