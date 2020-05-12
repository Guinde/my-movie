import React, { Component } from 'react';
import FavorisElement from './favoris-element/FavorisElement';

export default class FavorisList extends Component {

    render() {
        return (
            <div className="w-100 d-flex flex-row flex-wrap" >
                { this.props.favoris && this.props.favoris.length > 0 ?  (
                    this.props.favoris.map((f, index) => (
                        <FavorisElement 
                            key={ f.title + index } 
                            favori={ f } 
                            removeFavori={ this.props.removeFavori }
                        />
                    ))
                    ) : (
                        <div className="d-flex flex-row w-100 mt-5">
                            <div className="display-3 ml-auto mr-auto">Aucun Favoris</div>
                        </div>
                    )
                }
            </div>
        );
    }
}