import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../../store/auth/thunks';
import './style.css';

export const Navbar = () => {

    const {displayName, uid} = useSelector(state =>state.auth);
    const dispatch = useDispatch();

    const logout = ()=>{
        dispatch(startLogout());
    }
    return (
        <header className='header'>
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/490/490091.png" alt="Tree" />
                <h2>{import.meta.env.VITE_FIRST_TITLE}<span>{import.meta.env.VITE_SECOND_TITLE}</span></h2>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    {!displayName && <li className="nav-item"><Link className='link' to='/'>Inicio</Link></li>}
                    {!displayName &&  <li className="nav-item"><a href="about.html">About</a></li>}
                    {!displayName &&  <li className="nav-item"><a href="contact.html">Contact</a></li>}
                   
                    {displayName && <li className="nav-item"><Link to='/redes'> Mis redes</Link></li>}
                    {displayName && <li className="nav-item"><Link to={`/usuario/${displayName}`}> Mi perfil</Link></li>}
                </ul>
            </div>
            <div className="sign">
                {displayName ? <div className='userName'>{displayName}</div> :<button className='btn'><Link className='link' to='/auth/login'>Iniciar sesión</Link></button>}
                {!displayName &&  <button className='btn'><Link className='link' to='/auth/register'>Registrarse</Link></button>}
                
{/*                 {displayName &&  <button className='btn-logout'><Link className='link' to='/auth/login' onClick={logout}>Cerrar sesión</Link></button>}
 */}                
                {displayName &&  <button className='btn-logout' onClick={logout}><Link className='link' to='/auth/login'>Cerrar sesión</Link></button>}
            </div>
        </header>
    )
}
