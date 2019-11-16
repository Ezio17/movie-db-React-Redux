import React from "react";
import { Link } from "react-router-dom";

const ActorBlock = props => {
  return (
    <div className="actors-block">
      {props.actors.map(actor => (
        <div className="actors-block__container" key={actor.id}>
          <Link to={`/actor/${actor.id}`}>
            {actor.profile_path === null ? (
              <img
                className="actors-block__image"
                src={require("../../img/No_person.jpg")}
                alt={actor.character}
              />
            ) : (
                <img
                  className="actors-block__image"
                  src={`https://image.tmdb.org/t/p/w154${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
          </Link>
          <Link to={`/actor/${actor.id}`}>
            <h4>{actor.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ActorBlock;
