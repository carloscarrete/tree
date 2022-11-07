import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../../store/auth/thunks';
import './style.css';

export const Navbar = () => {

    const { displayName, uid } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const tabNav = useRef();

    const logout = () => {
        dispatch(startLogout());
    }

    const handleOpenNav = () => {
        tabNav.current.style.width = "100%"
    }

    const handleCloseNav = () => {
        tabNav.current.style.width = "0%"
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
                    {!displayName && <li className="nav-item"><a href="about.html">About</a></li>}
                    {!displayName && <li className="nav-item"><a href="contact.html">Contact</a></li>}

                    {displayName && <li className="nav-item"><Link to='/redes'> Mis redes</Link></li>}
                    {displayName && <li className="nav-item"><Link to={`/usuario/${displayName}`}> Mi perfil</Link></li>}
                </ul>
            </div>
            <div className="sign">
                {displayName ? <div className='userName'>{displayName}</div> : <button className='btn'><Link className='link' to='/auth/login'>Iniciar sesión</Link></button>}
                {!displayName && <button className='btn'><Link className='link' to='/auth/register'>Registrarse</Link></button>}

                {/*                 {displayName &&  <button className='btn-logout'><Link className='link' to='/auth/login' onClick={logout}>Cerrar sesión</Link></button>}
 */}
                {/*                 {displayName && <button className='btn-logout' onClick={logout}><Link className='link' to='/auth/login'>Cerrar sesión</Link></button>} */}
            </div>

            <button className='menu' onClick={handleOpenNav}>Menú</button>
            <div className="overlay" id="mobile-menu" ref={tabNav}>
                <button className='close' onClick={handleCloseNav}>&times;</button>
                <div className="overlay-contetn">
                    <Link  to='/'>Inicio</Link>
                    {/* {!displayName && <li className="nav-item"><a href="about.html">About</a></li>}
                    {!displayName && <li className="nav-item"><a href="contact.html">Contact</a></li>} */}

                    {/* Cuando haya un usuario con sesión iniciada */}
                    {displayName && <Link onClick={handleCloseNav} to='/redes'>Mis redes</Link>}
                    {displayName && <Link onClick={handleCloseNav} to={`/usuario/${displayName}`}>Mi perfil</Link>}
                    {displayName &&  <button onClick={handleCloseNav} className='btn-logout'><Link className='link' to='/auth/login' onClick={logout}>Cerrar sesión</Link></button>}

                    {/* Cuando no haya un usuario con sesión iniciada */}
                    {!displayName && <Link className='link' onClick={handleCloseNav} to='/auth/login'>Iniciar sesión</Link>}
                    {!displayName && <Link className='link' onClick={handleCloseNav} to='/auth/register'>Registrarse</Link>}
                </div>
            </div>
        </header>
    )
}
