import * as axios from 'axios';

export const apiFirebase = axios.create({
    baseURL: "https://films-c0f18.firebaseio.com/"
});

export default {
    fetchFavoris: async () => {
        try {
            const favorisData = await apiFirebase.get('favoris.json');
            const favoris = favorisData.data ? favorisData.data : []
            return favoris;
        } catch(e){
            return e
        }
    },
    saveFavoris: favoris => apiFirebase.put('favoris.json', favoris)
}
