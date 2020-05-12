import * as actions from './films.actions';

export default ( state = { 
    data: [],
    isLoading: false,
    error: null,
    selectedMovie:0,
    pageNumber: 1,
    totalPages: null
}, action) => {
    switch (action.type) {
        case actions.REQUEST_MOVIES: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.FETCH_MOVIES_SUCCESS:
        case actions.FETCH_ALL_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: [...action.movies],
                pageNumber: action.pageNumber,
                totalPages: action.totalPages
            }
        case actions.FETCH_ALL_MOVIES_ERROR:
        case actions.FETCH_MOVIES_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        }
        case actions.SET_SELECTED_MOVIE: {
            return {
                ...state,
                selectedMovie: action.index
            }
        }
        default: {
            return state
        }
    }
}