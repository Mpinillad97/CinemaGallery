CinemaGallery

## 📽️ An API to manage movie data, built with Express, MongoDB, and Mongoose.
This project is a simple yet powerful backend API designed to manage a collection of movies. It allows users to perform CRUD operations on movie data, such as adding new movies, retrieving movie information, and ensuring the integrity of the data with a validation middleware.

## 🚀 Features
- **Add Movies**: Allows users to add new movies to the collection, providing essential details such as title, director, year, duration, genre, rating,  and poster URL.
- **Get Movies**: Fetches all movies stored in the database, with an option to extend the functionality to filter by different attributes.
- **Validation Middleware**: Ensures that all required fields are provided when adding a new movie to the collection.
- **MongoDB Integration**: Uses MongoDB for efficient storage and retrieval of movie data.
- **RESTful Routes**: Designed to follow REST principles, providing easy-to-use endpoints for managing movies.

## 🛠️ Technologies Used
- **Node.js**: Server-side JavaScript runtime environment.
- **Bootstrap**: Frontend framework for building responsive and mobile-first web pages.
- **Express.js**: Web framework for Node.js to handle routing and HTTP requests.
- **MongoDB**: NoSQL database to store movie information.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Jest**: Testing framework to ensure API functionality.
- **dotenv**: Secure handling of environment variables.
- **JavaScript**: Core programming language used for both backend and frontend logic.
- **HTML**: Markup language used for structuring the web pages.
- **CSS**: Styling language for designing the appearance of the web pages.

## 🔧 Installation
To get this project up and running locally, follow these steps:

1. Clones this repository: 
    git clone https://github.com/Mpinillad97/CinemaGallery.git

2. Navigate into the project directory: 
    cd CinemaGallery

3. Install the dependencies:
    npm install

4. Set up your environment variables (you need to create a .env file in the root directory with the following variables):
    DB_USER=yourMongoDBUsername
    DB_PASSWORD=yourMongoDBPassword
    DB_CLUSTER=yourMongoDBCluster
    DB_NAME=yourDatabaseName

5. Start the server: 
    npm start

6. The API will be live at `http://localhost:3000`

## 📜 API Endpoints
- **GET /movies:** Retrieve all movies in the database.
- **POST /movies:** Add a new movie (requires a JSON body with fields: title, year, director, duration, genre, rate, poster).

## 💡 Contributing
If you’d like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Contributions, issues, and feature requests are welcome!

## 📑 License
This project is licensed under the **MIT** License. See the LICENSE file for more information.

---

# CinemaGallery

## 📽️ Una API para gestionar datos de películas, construida con Express, MongoDB y Mongoose.
Este proyecto es una API backend simple pero poderosa, diseñada para gestionar una colección de películas. Permite a los usuarios realizar operaciones CRUD sobre los datos de las películas, como agregar nuevas películas, recuperar información de las películas y garantizar la integridad de los datos con un middleware de validación.

## 🚀 Características
- **Agregar Películas:** Permite a los usuarios agregar nuevas películas a la colección, proporcionando detalles esenciales como título, director, año, duración, género, calificación y URL del cartel.
- **Obtener Películas:** Recupera todas las películas almacenadas en la base de datos, con la opción de extender la funcionalidad para filtrar por diferentes atributos.
- **Middleware de Validación:** Asegura que todos los campos requeridos estén presentes al agregar una nueva película a la colección.
- **Integración con MongoDB:** Utiliza MongoDB para un almacenamiento y recuperación eficiente de los datos de las películas.
- **Rutas RESTful:** Diseñado para seguir los principios REST, proporcionando endpoints fáciles de usar para gestionar las películas.

## 🛠️ Tecnologías Utilizadas
- **Node.js:** Entorno de ejecución de JavaScript en el servidor.
- **Bootstrap**: Framework de frontend para construir páginas web responsivas y móviles.
- **JavaScript**: Lenguaje de programación principal utilizado tanto en el backend como en el frontend.
- **HTML**: Lenguaje de marcado utilizado para estructurar las páginas web.
- **CSS**: Lenguaje de estilo para diseñar la apariencia de las páginas web.
- **Express.js:** Framework web para Node.js para manejar el enrutamiento y las solicitudes HTTP.
- **MongoDB:** Base de datos NoSQL para almacenar la información de las películas.
- **Mongoose:** Biblioteca ODM (Modelado de Datos de Objetos) para MongoDB y Node.js.
- **Jest:** Framework de pruebas para asegurar la funcionalidad de la API.
- **dotenv:** Manejo seguro de variables de entorno.

## 🔧 Instalación
Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio:
    git clone https://github.com/Mpinillad97/CinemaGallery.git

2. Navega al directorio del proyecto:
    cd CinemaGallery

3. Instala las dependencias:
    npm install

4. Configura tus variables de entorno (debes crear un archivo `.env` en el directorio raíz con las siguientes variables):
    DB_USER=tuUsuarioMongoDB
    DB_PASSWORD=tuContraseñaMongoDB
    DB_CLUSTER=tuClusterMongoDB
    DB_NAME=tuNombreDeBaseDeDatos

5. Inicia el servidor:
    npm start

6. La API estará disponible en `http://localhost:3000`.

## 📜 Endpoints de la API
- **GET /movies:** Recupera todas las películas en la base de datos.
- **POST /movies:** Agrega una nueva película (requiere un cuerpo JSON con los campos: título, año, director, duración, género, calificación, cartel).

## 💡 Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio, realizar tus cambios y enviar un pull request. ¡Se aceptan contribuciones, problemas y solicitudes de características!

## 📑 Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
