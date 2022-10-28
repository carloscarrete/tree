import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { startLoadingNetworks } from "../../store/social-networks/thunks";


import './styles/profile.css'

export const Profile = () => {

  const { uid } = useSelector(state => state.auth);
  const {networks} = useSelector(state => state.networks);
  const profileNetworks = networks[0]?.networks;
  console.log(profileNetworks);

  const { user } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
      console.log(uid)
      dispatch(startLoadingNetworks(user)); //)
  }, [dispatch])

  const tempIMG = 'https://pub-cd0a3c2522104dc8b025e2367ee067fe.r2.dev/outputs/b56b8e17-a311-41c4-8ce7-7e07efdbda2c.png';


  return (
    <div className="my-info">
      <div className="profile-card">
        <div className="card-header">
          <div className="pic">
            <img src={tempIMG} alt="" />
          </div>
          <div className="name">Carlos Carrete</div>
          <div className="desc">La producción de código abierto nos ha demostrado que el software de clase mundial, como Linux y Mozilla, no puede ser creado ni con la estructura burocrática de la empresa ni con los incentivos del mercado tal como los conocemos</div>
          <div className="sm">
            
         {/* <FontAwesomeIcon className="my-icon" icon="fa-brands fa-facebook" />
          <FontAwesomeIcon className="my-icon" icon="fa-brands fa-twitter" />
          <FontAwesomeIcon className="my-icon" icon="fa-brands fa-github" />
          <FontAwesomeIcon className="my-icon" icon="fa-brands fa-youtube" />  */}

          {
            profileNetworks?.map(network => (
              <FontAwesomeIcon key={network.name} className="my-icon" icon={`fa-brands fa-${network.name}`} />
            ))
          }

          </div>
          <a href="#" className="contact-btn">Donar $100</a>
        </div>
      </div>
    </div>
  )
}
