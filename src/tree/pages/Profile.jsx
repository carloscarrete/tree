import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom"
import { loadInfoUser } from "../../helpers/loadInfoUser";
import { startSettingProfilePictures } from "../../store/profileUser/thunks";
import { startLoadingNetworks } from "../../store/social-networks/thunks";


import './styles/profile.css'

export const Profile = () => {

  const { uid } = useSelector(state => state.auth);
  const {networks} = useSelector(state => state.networks);
  const profile = useSelector(state => state.profile);


  const profileNetworks = networks;
  const [profileUserInfo, setProfielUserInfo] = useState();

  const { user } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(startLoadingNetworks(user));
  }, [dispatch])

  useEffect( () => {
    dispatch(startSettingProfilePictures(user));
  }, [dispatch])
  

  const tempIMG = 'https://pub-cd0a3c2522104dc8b025e2367ee067fe.r2.dev/outputs/b56b8e17-a311-41c4-8ce7-7e07efdbda2c.png';

  return (
    <div className="my-info" style={{background: `url(${profile?.profileBackgroundPicture}) no-repeat center`}}>
      <div className="profile-card">
        <div className="card-header">
          <div className="pic">
            <img src={profile?.profilePicture} alt="profile-picture" />
          </div>
          {/* <div className="name">Carlos Carrete</div>
          <div className="desc">La producción de código abierto nos ha demostrado que el software de clase mundial, como Linux y Mozilla, no puede ser creado ni con la estructura burocrática de la empresa ni con los incentivos del mercado tal como los conocemos</div>
          <div className="sm"> */}
          <div className="name">{profile?.username} {profile?.verified && <img src="../src/assets/verified.svg" alt="verified" height="20px" />}</div>
          <div className="desc">{profile?.biography}</div>
          <div className="sm">
         {/* <FontAwesomeIcon className="my-icon" icon="fa-brands fa-facebook" />
          <FontAwesomeIcon className="my-icon" icon="fa-brands fa-twitter" />
          <FontAwesomeIcon className="my-icon" icon="fa-brands fa-github" />
          <FontAwesomeIcon className="my-icon" icon="fa-brands fa-youtube" />  */}

          {
            profile?.networks.map(network => (
                <a key={network.name} href={network.url} rel="noopener" target="_blank"><FontAwesomeIcon className="my-icon" icon={`fa-brands fa-${network.name}`} /> </a>              
            ))
          }

          </div>
          <a href="https://donate.stripe.com/14k3dJ9g1fdY1fG5kk" className="contact-btn" target="_blank">Donar $50</a>
        </div>
      </div>
    </div>
  )
}
