import React from "react";
import "./scss/index.scss";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configurStore";

import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import MoviesContainer from "./containers/MoviesConatiner";
import MovieContainer from "./containers/MovieContainer";
import ActorsContainer from "./containers/ActorsContainer";
import Footer from "./components/page/footer/Footer";
import ActorContainer from './containers/ActorContainer'

function App(props) {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <div id="page-warpper">
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={HomeContainer}></Route>
            <Route
              exact
              path="/movies/:genre"
              component={MoviesContainer}
            ></Route>
            <Route exact path="/tv/:genre" component={MoviesContainer}></Route>
            <Route exact path="/movie/:id" component={MovieContainer}></Route>
            <Route exact path="/tv/id/:id" component={MovieContainer}></Route>
            <Route exact path="/actors" component={ActorsContainer}></Route>
            <Route exact path="/actor/:id" component={ActorContainer}></Route>
          </Switch>
          <Footer />
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
