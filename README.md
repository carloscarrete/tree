
# Social Treek

![Social Treek](https://portafolio-carrete.netlify.app/assets/socialtreek-07f1ecb5.png)

Social Treek es una plataforma que te permite compartir tus redes sociales de manera rápida y sencilla. Con esta aplicación, puedes crear un perfil personalizado donde puedes agregar todas tus redes sociales y compartirlas fácilmente con tus seguidores. Además, puedes descubrir y seguir a otros usuarios interesantes, compartir contenido y recibir notificaciones cuando alguien te siga o te mencione en sus redes sociales.

## Características

- **Autenticación de usuarios**: Inicio de sesión y registro con nombre de usuario y contraseña.
- **Perfil personalizado**: Agrega una foto de perfil, un fondo personalizado y una biografía.
- **Gestión de redes sociales**: Añade, edita y elimina tus redes sociales favoritas.
- **Comparte tu perfil**: Comparte tu perfil con un enlace único para que otros puedan seguirte en todas tus plataformas.
- **Interfaz intuitiva**: Diseño limpio y fácil de usar.

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Redux**: Gestión del estado de la aplicación.
- **React Router**: Navegación y enrutamiento en la aplicación.
- **Vite**: Herramienta de construcción rápida para aplicaciones web modernas.
- **SweetAlert2**: Librería para mostrar alertas y notificaciones.
- **FontAwesome**: Iconos para la interfaz de usuario.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/carloscarrete/tree.git

2.  Navega al directorio del proyecto:

    
	    cd carloscarrete-tree
    
3.  Instala las dependencias:
    
	    npm install
    
4.  Crea un archivo  `.env`  en la raíz del proyecto y añade tus variables de entorno:
    

	    VITE_FIRST_TITLE=MEX
	    VITE_SECOND_TITLE=TREE
	    VITE_URL_API=https://backend-cr.onrender.com
    
5.  Inicia el servidor de desarrollo:

		 npm run dev
7.  Abre tu navegador y visita  `http://localhost:3000`  para ver la aplicación en funcionamiento.
## Estructura del proyecto
	carloscarrete-tree/
	├── index.html
	├── package.json
	├── vite.config.js
	├── .env.development.example
	├── public/
	│   ├── _redirects
	│   └── src/
	│       └── assets/
	└── src/
	    ├── index.css
	    ├── main.jsx
	    ├── TreeApp.jsx
	    ├── assets/
	    ├── auth/
	    │   ├── pages/
	    │   │   ├── index.js
	    │   │   ├── LoginPage.jsx
	    │   │   ├── RegisterPage.jsx
	    │   │   └── styles/
	    │   │       ├── old_styles.css
	    │   │       └── styles.css
	    │   └── routes/
	    │       └── AuthRoutes.jsx
	    ├── data/
	    │   └── socialNetworks.jsx
	    ├── helpers/
	    │   ├── fetch.js
	    │   ├── loadInfoUser.js
	    │   ├── loadNetworks.js
	    │   └── uploadImage.js
	    ├── hooks/
	    │   ├── index.js
	    │   └── useForm.js
	    ├── router/
	    │   ├── AppRouter.jsx
	    │   ├── PrivateRoute.jsx
	    │   └── PublicRoute.jsx
	    ├── store/
	    │   ├── index.js
	    │   ├── store.js
	    │   ├── auth/
	    │   │   ├── authSlice.js
	    │   │   ├── index.js
	    │   │   └── thunks.js
	    │   ├── profileUser/
	    │   │   ├── profileUserSlice.js
	    │   │   └── thunks.js
	    │   └── social-networks/
	    │       ├── socialSlice.js
	    │       └── thunks.js
	    └── tree/
	        ├── pages/
	        │   ├── Profile.jsx
	        │   ├── SocialNetworks.jsx
	        │   ├── TreePage.jsx
	        │   └── styles/
	        │       ├── profile.css
	        │       ├── style.css
	        │       └── table.css
	        ├── routes/
	        │   └── TreeRoutes.jsx
	        └── ui/
	            ├── Footer/
	            │   ├── Footer.jsx
	            │   └── style.css
	            └── Navbar/
	                ├── Navbar.jsx
	                └── style.css
## Backend
Puedes visitar el proyecto backend del proyecto en el siguiente enlace:
https://github.com/carloscarrete/backend-tree

## Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:
1.  Haz un fork del repositorio.    
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).  
3.  Realiza tus cambios y haz commit (`git commit -am 'Añade nueva funcionalidad'`).   
4.  Haz push a la rama (`git push origin feature/nueva-funcionalidad`).    
5.  Abre un Pull Request.
## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo  [LICENSE](https://license/)  para más detalles.