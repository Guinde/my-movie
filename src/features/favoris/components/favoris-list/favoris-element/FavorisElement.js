import React, { Component } from 'react';
import Style from "./FavorisElement.module.scss";
import { MdFavorite } from 'react-icons/md';
import { IconContext } from "react-icons";

export default class FavorisElement extends Component {

    render() {
        const { favori } = this.props           // on recupere ma key favori de l'obj this.props
        return (
            <div className={`d-flex flex-row bg-light ${ Style.container }`}>
                <img alt="film" width="185" src={ favori.img } />
                <div className="flex-fill d-flex flex-column p-3">
                    <div className="d-flex flex-row justify-content-between">
                        <h5> { favori.title } </h5>
                        <IconContext.Provider value={{size: "25px"}}>
                            <div>
                                <MdFavorite onClick={ () => this.props.removeFavori(favori.title) }/>
                            </div>
                        </IconContext.Provider>
                    </div>
                    <hr className="w-100" />
                    <p> { favori.details } </p>
                </div>
            </div>
        ); 
    }
}