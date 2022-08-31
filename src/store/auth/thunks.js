import { checkAuth, login } from "./authSlice"
import Swal from 'sweetalert2'
import {fetchWithToken, fetchWithoutToken} from '../../helpers/fetch'


export const startLogin = (username, password) => {
    return async(dispatch) => {
        const res = await fetchWithoutToken('api/v1/auth/login', {username, password}, 'POST');
        const data = await res.json();
        if(data.ok){
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            const id = data.id;
            const email = data.email;
            dispatch(login({id, username, email}));
        }
    }
}

export const checkingAuth = () => {
    return async (dispatch) => {
        const res = await fetchWithToken('api/v1/auth/renew-token');
        const data = await res.json();
        if(data.ok){
            //localStorage.setItem('token', data.token);
            //localStorage.setItem('token-init-date', new Date().getTime());
            const id = data.uid;
            const email = data.email;
            const username = data.username;
            dispatch(login({id, username, email}));
        }else{
            dispatch(checkAuth());
        }
    }
}