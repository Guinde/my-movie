import { createSelector } from 'reselect';

export const movieSelector = state => state.movies;

export const moviesIsLoadingSelector = createSelector(
    [movieSelector],
    movies => movies.isLoading
)

export const moviesListSelector = createSelector(
    [movieSelector],
    movies => movies.data
)

export const moviesSelectedMoviesIndexSelector = createSelector(
    [movieSelector],
    movies => movies.selectedMovie
)

export const moviesSelectedMovieSelector = createSelector(
    [moviesListSelector, moviesSelectedMoviesIndexSelector],
    (movies, index) => movies[index]
)

export const moviesPageNumberSelector = createSelector(
    [movieSelector],
    movies => movies.pageNumber
)

export const moviesTotalPagesSelector = createSelector(
    [movieSelector],
    movies => movies.totalPages
)