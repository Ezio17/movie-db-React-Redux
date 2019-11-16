import React from "react";
import CurrencyFormat from "react-currency-format";
import StarRatings from "react-star-ratings";

const MovieDetails = ({ movie }) => {
  let companies = [];
  let country = [];
  let genre = [];
  let genreId = [];

  const setDetailsInArr = (arr, newArr, param) => {
    for (let key in arr) {
      newArr.push(arr[key][param]);
    }
  };

  setDetailsInArr(movie.production_companies, companies, "name");
  setDetailsInArr(movie.production_countries, country, "name");
  setDetailsInArr(movie.genres, genre, "name");
  setDetailsInArr(movie.genres, genreId, "id");

  return (
    <>
      <div className="info-line">
        <p className="info-line__name">год:</p>
        <p className="info-line__details">
          {movie.release_date || movie.first_air_date}
        </p>
      </div>
      {country.length !== 0 && (
        <div className="info-line">
          <p className="info-line__name">страна:</p>
          <p className="info-line__details">{country.join(", ")}</p>
        </div>
      )}
      {movie.tagline && (
        <div className="info-line">
          <p className="info-line__name">слоган:</p>
          <p className="info-line__details">{movie.tagline}</p>
        </div>
      )}
      {companies.length !== 0 && (
        <div className="info-line">
          <p className="info-line__name">компания:</p>
          <p className="info-line__details">{companies.join(", ")}</p>
        </div>
      )}
      {genre.length !== 0 && (
        <div className="info-line">
          <p className="info-line__name">жанр:</p>
          <p className="info-line__details">{genre.join(", ")}</p>
        </div>
      )}
      {movie.revenue !== undefined && (
        <div className="info-line">
          <p className="info-line__name">сборы:</p>
          <p className="info-line__details">
            <CurrencyFormat
              value={movie.revenue}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </p>
        </div>
      )}
      <div className="info-line">
        <p className="info-line__name">время:</p>
        <p className="info-line__details">
          {movie.runtime || movie.episode_run_time + " мин"}
        </p>
      </div>
      <div className="info-line">
        <p className="info-line__name">рейтинг:</p>
        <div className="info-line__details">
          <StarRatings
            numberOfStars={10}
            rating={movie.vote_average}
            starDimension={"20px"}
            starRatedColor="rgb(191, 217, 89)"
            starSpacing="4px"
          />
        </div>
      </div>
      <div className="info-line">
        <p className="info-line__name">голосов:</p>
        <p className="info-line__details">{movie.vote_count}</p>
      </div>
      {movie.number_of_episodes !== undefined && (
        <>
          <div className="info-line">
            <p className="info-line__name">сезонов:</p>
            <p className="info-line__details">{movie.number_of_seasons}</p>
          </div>
          <div className="info-line">
            <p className="info-line__name">серий:</p>
            <p className="info-line__details">{movie.number_of_episodes}</p>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
