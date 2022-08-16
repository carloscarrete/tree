
import { Link } from 'react-router-dom';
import './styles/style.css';

export const TreePage = () => {
  return (
    <section className="main-page">
      <div className="main-content">
        <div className="image">
          <img src="https://cdn-icons-png.flaticon.com/512/490/490091.png" alt="Tree" />
        </div>
        <div className="main-info">
          <div className="title-main">
            <h1>Muestra a la gente tus redes sociales</h1>
          </div>
          <div className="main-description">
             ¿Quieres mostrar a tus seguidores tus redes sociales?
            <br />
            ¡No te preocupes!. 
            <br />
            Con nuestro servicio podrás mostrar a tus seguidores tus redes sociales.
            <br />
            <button className='btn'><Link className='link' to='/auth/login'>Iniciar sesión</Link></button>
            <button className='btn'><Link className='link' to='/auth/register'>Registrarse</Link></button>
          </div>
        </div>
      </div>
    </section>
  )
}
