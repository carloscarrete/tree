import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = () => {

    const {displayName} = useSelector(state =>state.auth);

    return (
        <header className='header'>
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/490/490091.png" alt="Tree" />
                <h2>{import.meta.env.VITE_FIRST_TITLE}<span>{import.meta.env.VITE_SECOND_TITLE}</span></h2>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <li className="nav-item"><Link className='link' to='/'>Inicio</Link></li>
                    <li className="nav-item"><a href="about.html">About</a></li>
                    <li className="nav-item"><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div className="sign">
                {displayName ? <div className='userName'>{displayName}</div> :<button className='btn'><Link className='link' to='/auth/login'>Iniciar sesión</Link></button>}
                {!displayName &&  <button className='btn'><Link className='link' to='/auth/register'>Registrarse</Link></button>}
            </div>
        </header>
    )
}
