import { fetchWithToken } from "../../helpers/fetch"
import { loadNetworks } from "../../helpers/loadNetworks";
import { add } from "./socialSlice";

export const addSocialNetwork = (infoValues) => {
    return async (dispatch) => {
        const res = await fetchWithToken('api/v1/networks',infoValues, 'POST');
        const data = await res.json();
        console.log(data);
        if(data.ok){
            const { name , url } = data;
            dispatch(add({name, url}));
        }
    }
}

export const startLoadingNetworks = (user) => {
    return async (dispatch) => {
        const networks = await loadNetworks(user);
        console.log(networks);
    }
}