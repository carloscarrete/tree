import { useDispatch } from "react-redux";
import { useForm } from "../../hooks"
import { startRegister } from "../../store/auth/thunks";

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { handleInputChange, reset, values, username, email, password, confirmPassword } = useForm({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
  });

  const onHandleRegister = (e) => {
    e.preventDefault();
    dispatch(startRegister(values));
    reset();
  }

  return (
    <section className='wrapper'>
        <div className="content">
          <header>
            <h1>Registrarse</h1>
          </header>
          <section>
            <form className="login-form" onSubmit={onHandleRegister}>
              <div className="input-group">
                <label htmlFor="username">Nombre de usuario</label>
                <input onChange={handleInputChange} value={username} name="username" type="text" id="username" placeholder='Introduzca un nombre de usuario' autoComplete='off'/>
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onChange={handleInputChange} value={email} name="email" type="email" id="email" placeholder='Introduzca su correo electrónico' autoComplete='off'/>
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input onChange={handleInputChange} value={password} name="password" type="password" id="password" placeholder='Introduzca su contraseña' autoComplete='off'/>
              </div>
              <div className="input-group">
                <label htmlFor="password2">Contraseña</label>
                <input onChange={handleInputChange} value={confirmPassword} name="confirmPassword" type="password" id="password2" placeholder='Confirme su contraseña' autoComplete='off'/>
              </div>
              <div className="input-group">
                <button type="submit" className="button">Registrarse</button>
              </div>
            </form>
          </section>
        </div>
    </section>
  )
}
