import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'

import { slider } from '../../data/index'

const SliderMovies = props => {
  let settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {slider.map(slide => (
          <div key={`https://image.tmdb.org/t/p/w1280/${slide.url}`}>
            <div style={{
              height: '650px',
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${slide.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <Link to={`/movie/${slide.id}`}>
                <button className='slider__button'>О фильме</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderMovies