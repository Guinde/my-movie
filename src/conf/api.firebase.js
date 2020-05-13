import { apiFirebase } from './api.js'

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
