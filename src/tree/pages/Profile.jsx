import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { startLoadingNetworks } from "../../store/social-networks/thunks";

export const Profile = () => {

    const {uid} = useSelector(state=>state.auth);
    const {user} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      if(uid){
          dispatch(startLoadingNetworks(user)); //)
      }
     }, [dispatch, uid])
   


  return (
    <h1>Hilos Mundo Mundial {user}</h1>
  )
}
