import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import { checkingAuth } from '../../store/auth/thunks';
import './styles/styles.css';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { handleInputChange, reset, values, email, password } = useForm({
    email: 'carloscarrete.sc@gmail.com',
    password: '123456Mexico'
  });

  const onHandleLogn = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(checkingAuth());
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
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Por favor, introduzca su email' autoComplete='off' value={email} onChange={handleInputChange} name="email"/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder='Por favor, introduzca su contraseña' value={password} onChange={handleInputChange} name="password" />
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
