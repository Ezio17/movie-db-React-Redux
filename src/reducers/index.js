import { combineReducers } from "redux";

import search from "./search";
import recomadation from "./recomadation";
import movies from "./movies";
import movie from "./movie";
import actors from "./actors";
import actor from './actor'

export default combineReducers({
  recomadation,
  search,
  movies,
  movie,
  actors,
  actor
});
