import Swal from "sweetalert2";
import { fetchWithToken } from "../../helpers/fetch"
import { loadNetworks } from "../../helpers/loadNetworks";
import { add, deleteN, load } from "./socialSlice";

export const addSocialNetwork = (infoValues) => {
    return async (dispatch) => {
        const res = await fetchWithToken('api/v1/networks',infoValues, 'POST');
        const data = await res.json();
        if(data.ok){
            const { name , url } = data;
            dispatch(add({name, url}));
            Swal.fire({
                title: 'Red Social Agregada',
                text: "La red social ha sido agregada con éxito",
                icon: 'success',
                timer: 5000
            });
        }else{
            Swal.fire({
                title: 'Error',
                text: data.message,
                icon: 'error',
                timer: 5000
            })
        }
    }
}

export const startLoadingNetworks = (user) => {
    return async (dispatch) => {
        const {networks} = await loadNetworks(user);
        dispatch(load(networks));
    }
}

export const deleteSocialNetwork = ( id ) => {
    return async (dispatch) => {
        const res = await fetchWithToken(`api/v1/networks/${id}`,{}, 'DELETE');
        const data = await res.json();
        if(data.ok){
            dispatch(deleteN(id));
            Swal.fire({
                title: 'Red Social Eliminada',
                text: "La red social ha sido eliminada con éxito",
                icon: 'success',
                timer: 5000
            });
        }else{
            Swal.fire({
                title: 'No se ha podido eliminar la Red Social',
                text: "Ha ocurrido un error, no se ha podido eliminar la Red Social",
                icon: 'error',
                timer: 5000
            })
        }
    }
}
