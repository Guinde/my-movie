import React, { Component } from 'react';

export default class MovieDetails extends Component {
    render() {
        const { movie } = this.props
        return (
            <div className="w-25 bg-light p-4 d-flex flex-column">
                { movie ? (
                    <>
                        <h5> {movie.title} </h5> 
                        <hr className="w-100" />
                        <div>
                            <img alt="movieAvatar" className="mx-auto d-block w-100" src={ movie.img } />
                        </div>
                        <hr className="w-100"/>
                        <span className="text-secondary"> {movie.details}</span>
                        <span> {movie.description} </span>
                    </>
                ) : null}
            </div>
        ) 
    }
}