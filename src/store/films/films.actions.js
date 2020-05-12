import apiMovieRequest from '../../conf/api.movie';

export const REQUEST_MOVIES = 'request movies';

export const FETCH_MOVIES = 'fetch movies';
export const FETCH_MOVIES_SUCCESS = 'fetch movies success';
export const FETCH_MOVIES_ERROR = 'fetch movies error';

export const FETCH_ALL_MOVIES = 'fetch all movies';
export const FETCH_ALL_MOVIES_SUCCESS = 'fetch all movies success';
export const FETCH_ALL_MOVIES_ERROR = 'fetch all movies error';

export const SET_SELECTED_MOVIE = 'set selected movie';

export const requestMovies = () => ({               // ES6 ({}) permet de renvoyer un objet en 1 instruction
    type: REQUEST_MOVIES
});

export const fetchMoviesSuccess = data => ({
    type: FETCH_MOVIES_SUCCESS,
    movies: data.movies,
    pageNumber: data.page,
    totalPages: data.total_pages
});

export const fetchMoviesError = error => ({
    type: FETCH_ALL_MOVIES_ERROR,
    error: error
});

export const fetchMovies = filter => async dispatch => {
    dispatch(requestMovies());
    try {
        const data = await apiMovieRequest.searchMovies(filter)
        dispatch(fetchMoviesSuccess(data))
    } catch(e) {
        dispatch(fetchMoviesError(e))
    }
}

export const fetchAllMoviesSuccess = (data, pageNumber) => ({
    type: FETCH_ALL_MOVIES_SUCCESS,
    movies: data.movies,
    pageNumber: pageNumber,
    totalPages: data.total_pages
});

export const fetchAllMoviesError = error => ({
    type: FETCH_MOVIES_ERROR,
    error: error
});

export const fetchAllMovies = (pageNumber = 1) => async dispatch => {
    dispatch(requestMovies());
    try {
        const data = await apiMovieRequest.getAllMovies(pageNumber);
        dispatch(fetchAllMoviesSuccess(data, pageNumber))
    } catch(e) {
        dispatch(fetchAllMoviesError(e))
    }
}

export const setSelectedMovie = index => ({
    type: SET_SELECTED_MOVIE,
    index: index
})