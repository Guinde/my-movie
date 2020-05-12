import React, { Component } from 'react';
import Style from "./MovieElement.module.scss";
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { IconContext } from "react-icons";

export default class MovieElement extends Component {

    movieSelected = () => {
        this.props.updateSelectedMovie();
    }

    addMovieTofavori = () => {
        this.props.addMovieFavori(this.props.movie.title)
    }

    removeMovieFromfavori = () => {
        this.props.removeMovieFavori(this.props.movie.title)
    }

    render() {
        return (
            <div onClick={ this.movieSelected }  className={`d-flex flex-row bg-light ${ Style.container }`}>
                <img alt="film" width="185" src={ this.props.movie.img } />
                <div className="flex-fill d-flex flex-column p-3">
                    <div className="d-flex flex-row justify-content-between">
                        <h5> { this.props.movie.title } </h5>
                        <IconContext.Provider value={{size: "25px"}}>
                            { this.props.isFavori ? (
                                <div>
                                    <MdFavorite onClick={ this.removeMovieFromfavori }/>
                                </div>
                            ) : (
                                <div>
                                    <MdFavoriteBorder onClick={ this.addMovieTofavori }/>
                                </div>

                            ) }
                            </IconContext.Provider> 
                    </div>
                    <hr className="w-100" />
                    <p> { this.props.movie.details } </p>

                </div>
            </div>
        ); 
    }
}