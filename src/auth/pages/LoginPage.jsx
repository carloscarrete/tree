import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import { startLogin } from '../../store/auth/thunks';
import './styles/styles.css';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { handleInputChange, values, username, password } = useForm({
    username: '',
    password: ''
  });

  const onHandleLogn = (e) => {
    e.preventDefault();
    dispatch(startLogin(username, password));
  }


  return (
    <section className='wrapper'>
      <div className="content">
        <header>
          <h1>Iniciar sesión</h1>
        </header>
        <section>
          <form className="login-form" onSubmit={onHandleLogn}>
            <div className="input-group">
              <label htmlFor="username" className='lbl-text'>Nombre de usuario</label>
              <input type="text" id="username" placeholder='Introduzca su nombre de usuario' autoComplete='off' value={username} onChange={handleInputChange} name="username"/>
            </div>
            <div className="input-group">
              <label htmlFor="password" className='lbl-text'>Contraseña</label>
              <input type="password" id="password" placeholder='Introduzca su contraseña' value={password} onChange={handleInputChange} name="password" />
            </div>
            <div className="input-group">
              <button type="submit" className="button">Iniciar sesión</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  )
}
