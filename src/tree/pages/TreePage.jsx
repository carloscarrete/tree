
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
            <h1>MUESTRA A LA GENTE TUS REDES SOCIALES</h1>
          </div>
          <div className="main-description">
            <span className='main__subtitle'>
            ¿Quieres compartir tus redes sociales de una manera rápida y sencilla?
            </span>
            <br />
            <span className='main__subtitle'>
            ¡Con Social Treek es posible!
            </span>
            <br />
            <p className="main__content">
            Con nuestra plataforma, puedes crear un perfil personalizado donde puedes agregar todas tus redes sociales y compartirlas de manera fácil y rápida con tus seguidores. ¡Así podrás conectar con ellos en todas tus plataformas favoritas!
            Además, en Social Treek podrás descubrir y seguir a otros usuarios interesantes, compartir contenido y recibir notificaciones cuando alguien te siga o te mencione en sus redes sociales. ¡Es la forma perfecta de aumentar tu presencia en línea y conectar con tus fans!
            ¿Qué esperas para unirte a Social Treek y compartir tus redes sociales de manera eficiente y sencilla? ¡Regístrate hoy mismo y empieza a conectar con tus seguidores!
            </p>
            <button className='btn'><Link className='link link--landing' to='/auth/login'>Iniciar sesión</Link></button>
            <button className='btn'><Link className='link link--landing' to='/auth/register'>Registrarse</Link></button>
          </div>
        </div>
      </div>
    </section>
  )
}
