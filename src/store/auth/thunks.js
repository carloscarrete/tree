import { addInfo, checkAuth, login, logout } from "./authSlice"
import Swal from 'sweetalert2'
import {fetchWithToken, fetchWithoutToken} from '../../helpers/fetch'
import { uploadImage } from "../../helpers/uploadImage"


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

export const startRegister = (registerData) =>{
    return async (dispatch) => {
        const res = await fetchWithToken('api/v1/auth/register', registerData, 'POST' );
        const data = await res.json();
        if(!data.ok){
            Swal.fire({
                title: 'Error',
                text: data.message,
                icon: 'error',
            })
        }
    }
}

export const startLogout = () =>{
    return async (dispatch)=>{
        localStorage.clear();
        dispatch(logout());
    }
}


export const startUploadingFiles = (biography, fileBackgroud, fileProfile) => {
    return async (dispatch) => {
        //biography && console.log(biography)
        //fileBackgroud && console.log(fileBackgroud)
        //fileProfile && console.log(fileProfile)
         //const url = await uploadImage(fileBackgroud);
         const imgProfile = fileProfile && await uploadImage(fileProfile, 'treeps');
         const imgBackground = fileBackgroud&& await uploadImage(fileBackgroud, 'treebs');

         const infoToUpload = {
            ...(imgBackground) && {profileBackgroundPicture: imgBackground},
            ...(imgProfile) && {profilePicture: imgProfile},
            ...(biography) && {biography: biography},
         }
         const res = await fetchWithToken('api/v1/auth/image/profile ', infoToUpload, 'PUT');
         const data = await res.json();
         const {profilePicture} = data;
         console.log(profilePicture);
         dispatch(addInfo({
            profileBackgroundPicture : profilePicture.profileBackgroundPicture,
            profilePicture: profilePicture.profilePicture,
            biography: profilePicture.biography
         }))
        }   
}
