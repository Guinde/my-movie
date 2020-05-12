import React, { Component } from 'react';
import { Header } from './components/index';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { fetchFavoris } from './store/actions';
import { moviesPageNumberSelector } from './store/selectors';

const LazyFilms = Loadable({
  loader: () => import(/* webpackChunkName: 'films' */'./features/films/index'),
  loading: () => <h1> Loading ...</h1>
})

const LazyFavoris = Loadable({
  loader: () => import(/* webpackChunkName: 'favoris' */'./features/favoris/components/index'),
  loading: () => <h1> Loading ...</h1>
})

class App extends Component {

  componentDidMount() {
    this.props.fetchFavoris();
    //this.getAllMovies();
  }

  // getAllMovies = async () => {
  //   try {
  //     const [allMovies, favorisMovies] = await Promise.all([apiMovie.get("/discover/movie"), apiFirebase.get('favoris.json')]);
  //     const movies = allMovies.data.results.map(movieMap);
  //     let favoris = favorisMovies.data ? favorisMovies.data : [];
  //     this.updateMovies(movies);
  //     this.updateFavoris(favoris);
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header getAllMovies={ this.getAllMovies }/>
        <Switch>
          <Route path="/films" component={ LazyFilms }/>
          <Route path="/favoris" component={ LazyFavoris }/>
          <Redirect to="/films" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(state => ({ pageNumber: moviesPageNumberSelector(state) }), { fetchFavoris })(App));
