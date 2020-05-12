import React, {Component } from 'react';
import  ReactDom  from 'react-dom';
import { MovieDetails, MovieList, SearchBar, Pagination } from './components/index';
import Loading from '../../components/utils/Loading';
import { connect } from 'react-redux';
import { 
  moviesIsLoadingSelector, 
  favorisTitleListSelector, 
  moviesSelectedMovieSelector, 
  moviesListSelector,
  moviesPageNumberSelector,
  moviesTotalPagesSelector
} from '../../store/selectors';
import { 
  tryRemoveFavori, 
  tryAddFavori, 
  setSelectedMovie, 
  fetchMovies,
  fetchAllMovies 
} from '../../store/actions';

class Films extends Component {

  constructor(props) {
    super(props)
    this.childDiv = React.createRef();
    this.state = {filter: ""};
  }

  componentDidMount() {
    this.props.fetchAllMovies();
  }

  componentDidUpdate() {
    //this.childDiv.current.scrollTo(0, 0);
    ReactDom.findDOMNode(this).scrollIntoView()
  }

  setFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  handlePagination = (pageNumber) => {
    if (this.state.filter !== "") {
      this.props.fetchMovies({...this.state.filter, page: pageNumber})
    } else {
      this.props.fetchAllMovies(pageNumber)
    }
  }

  render() {

    let pagination;

    if (this.props.totalPages > 1 ) {
      pagination =  <div className="d-flex justify-content-center">
                      <Pagination pageNumber={ this.props.pageNumber } 
                                  totalPages={this.props.totalPages} 
                                  handlePagination={ this.handlePagination } />
                    </div>
    } else {
      pagination = null
    }

    return (
      <div ref={this.childDiv}>
        <SearchBar updateMovies={ this.props.fetchMovies } 
                   setFilter={ this.setFilter } />
        { this.props.isLoading ? (
          <Loading />
        ) : (
          <div className="d-flex flex-column">
            <div className="d-flex flex-fill flew-row pt-4 p-2">
              <MovieList 
                movies={ this.props.movies } 
                updateSelectedMovie={ this.props.setSelectedMovie } 
                favoris={ this.props.favorisTitleMovies }  
                addMovieFavori={ this.props.tryAddFavori }
                removeMovieFavori={ this.props.tryRemoveFavori }
              />
              <MovieDetails movie={ this.props.selectedMovie } />
            </div>
              {pagination}
        </div>
        ) }
      </div>
    )
  }
}

export default connect(state => ({
  isLoading: moviesIsLoadingSelector(state),
  movies: moviesListSelector(state),
  favorisTitleMovies: favorisTitleListSelector(state),
  selectedMovie: moviesSelectedMovieSelector(state),
  pageNumber: moviesPageNumberSelector(state),
  totalPages: moviesTotalPagesSelector(state)
}), {
  tryRemoveFavori,
  tryAddFavori,
  setSelectedMovie,
  fetchMovies,
  fetchAllMovies
})(Films)