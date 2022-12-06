import { loadInfoUser } from "../../helpers/loadInfoUser"
import { loadPictures } from "./profileUserSlice";

export const startSettingProfilePictures = (user) => {
    return async (dispatch)=> {
        const res = await loadInfoUser(user);
        const {username, profilePicture,profileBackgroundPicture, networks, verified, biography} = res;
        dispatch(loadPictures({username, profilePicture, profileBackgroundPicture, networks, verified, biography}));
    }
}