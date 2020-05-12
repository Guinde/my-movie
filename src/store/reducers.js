import movies from './films/films.reducers';
import favoris from './favoris/favoris.reducers';

// {
//     movies: {
//         data: [],
//         selectedMovie: 0,
//         isLoading: false,
//         error: null
//     },
//     favoris: {
//         data: [],
//         isLoading: false,
//         error: null
//     }
// }

export default {
    movies: movies,
    favoris: favoris
}