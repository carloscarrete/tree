import React from 'react';
import './style.css';

export const Navbar = () => {
    return (
        <header className='header'>
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/490/490091.png" alt="Tree" />
                <h2>PITO<span>TREE</span></h2>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <li className="nav-item"><a href="index.html">Home</a></li>
                    <li className="nav-item"><a href="about.html">About</a></li>
                    <li className="nav-item"><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div className="sign">
                <button className='btn'>Iniciar sesión</button>
                <button className='btn'>Registrarse</button>
            </div>
        </header>
    )
}
