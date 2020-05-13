import { apiMovie } from './api.js'

export const movieMap = (m) => ({
    img: `https://image.tmdb.org/t/p/w500${ m.poster_path}`,
    title: m.title,
    details: `${ m.release_date } | ${ m.vote_average }/10 | ${ m.vote_count } votes`,
    description: m.overview
})

export default {
    getAllMovies: async pageNumber => {
        try {
            const moviesData = await apiMovie.get(`/discover/movie?page=${pageNumber}`)
            const movies = moviesData.data.results.map(movieMap)
            const {total_pages} = moviesData.data;
            return ({movies, total_pages});
        } catch(e) {
            return e
        }
    },
    searchMovies: async (filter) => {
        try {
            const query = "?" + Object.keys(filter).map(k => `${ k }=${ filter[k]}`).join("&");
            const moviesData = await apiMovie.get(`/search/movie${query}`);
            const movies = moviesData.data.results.map(movieMap);
            const {page, total_pages} = moviesData.data;
            return ({movies, page, total_pages});
        } catch(e) {
            return(e)
        }
    }
}
