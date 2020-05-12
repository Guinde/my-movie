import apiFirebaseRequest from '../../conf/api.firebase';

export const REQUEST_FAVORIS = 'request favoris';
export const FETCH_FAVORIS = 'fetch favoris';
export const FETCH_FAVORIS_SUCCESS = 'fetch favoris success';
export const FETCH_FAVORIS_ERROR = 'fetch favoris error';

export const TRY_ADD_FAVORI = 'try add favori';
export const ADD_FAVORI_SUCCESS = 'add favori success';
export const ADD_FAVORI_ERROR = 'add favori error';

export const TRY_REMOVE_FAVORI = 'try remove favori';
export const REMOVE_FAVORI_SUCCESS = 'remove favori success';
export const REMOVE_FAVORI_ERROR = 'remove favori remove';

export const requestFavoris = () => ({               // ES6 ({}) permet de renvoyer un objet en 1 instruction
    type: REQUEST_FAVORIS
});

export const fetchFavorisSuccess = favoris => ({
    type: FETCH_FAVORIS_SUCCESS,
    favoris: favoris
});

export const fetchFavorisError = error => ({
    type: FETCH_FAVORIS_ERROR,
    error: error
});

export const fetchFavoris = () => async dispatch => {
    dispatch(requestFavoris());
    try {
        const favoris = await apiFirebaseRequest.fetchFavoris();
        dispatch(fetchFavorisSuccess(favoris))
    } catch(e){
        dispatch(fetchFavorisError(e))
    }
}

export const addFavoriSuccess = favoris => ({
    type: ADD_FAVORI_SUCCESS,
    favoris
})

export const addFavoriError = error => ({
    type: ADD_FAVORI_ERROR,
    error: error
})

export const tryAddFavori = movie => (dispatch, getState) => {
    const favoris = [...getState().favoris.data, movie];
    return apiFirebaseRequest.saveFavoris(favoris).then(
        () => dispatch(addFavoriSuccess(favoris)),
        error => dispatch(addFavoriError(error))
    )
}

export const removeFavoriSuccess = favoris => ({
    type: REMOVE_FAVORI_SUCCESS,
    favoris: favoris
})

export const removeFavoriError = error => ({
    type: REMOVE_FAVORI_ERROR,
    error: error
})

export const tryRemoveFavori = title => (dispatch, getState) => {
    const favoris = getState().favoris.data.filter(f => f.title !== title);
    return apiFirebaseRequest.saveFavoris(favoris).then(
        () => dispatch(removeFavoriSuccess(favoris)),
        error => dispatch(removeFavoriError(error))
    )
}