import './styles/styles.css';

export const LoginPage = () => {
  return (
    /*     <section className="wrapper">
          <div className="content">
            <header>
              <h2>Iniciar sesión</h2>
            </header>
            <section>
              <form className='login-form'>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder='Por favor, introduzca su email' />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" id="password" placeholder='Por favor, introduzca su contraseña' />
                </div>
                <div className="input-group">
                  <button type="submit" className="button">Iniciar sesión</button>
                </div>
              </form>
            </section>
          </div>
        </section> */
    <section className='wrapper'>
      <div className="content">
        <header>
          <h1>Iniciar sesión</h1>
        </header>
        <section>
          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Por favor, introduzca su email' autoComplete='off'/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder='Por favor, introduzca su contraseña' />
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
