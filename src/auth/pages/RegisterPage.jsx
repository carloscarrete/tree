
export const RegisterPage = () => {
  return (
    <section className='wrapper'>
        <div className="content">
          <header>
            <h1>Registarse</h1>
          </header>
          <section>
            <form className="login-form">
              <div className="input-group">
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" id="username" placeholder='Introduzca un nombre de usuario' autoComplete='off'/>
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder='Introduzca su correo electrónico' autoComplete='off'/>
              </div>
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" placeholder='Introduzca su contraseña' autoComplete='off'/>
              </div>
              <div className="input-group">
                <label htmlFor="password2">Contraseña</label>
                <input type="password" id="password2" placeholder='Confirme su contraseña' autoComplete='off'/>
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
