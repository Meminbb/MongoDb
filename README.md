Aplicación MongoDB de MovieStream

Descripción general

MovieStream es una aplicación web CRUD simple creada con MongoDB y Node.js.

El proyecto rediseña una base de datos de transmisión de películas relacionales en un modelo de documento MongoDB y proporciona una interfaz web para interactuar con los datos.

La aplicación admite:
- Películas
- Géneros
- Clientes
- Ventas

Características

Películas
- Lista de películas
- Buscar películas
- Crea peliculas
- Editar películas
- Eliminar películas

Géneros
- Lista de géneros
- Crear géneros
- Eliminar géneros
- Evitar la eliminación si las películas hacen referencia a ellas

Clientes
- Listar clientes
- Buscar clientes
- Crear clientes
- Eliminar clientes

Ventas
- Listar ventas
- Crear ventas
- Eliminar ventas
- Mostrar información relacionada con el cliente y la película

Stack utilizada

Backend
- Nodoe.js
- Express.js
- MongoDB

Base de datos
- Atlas de MongoDB

Frontend
- HTML
- Bootstrap
- JavaScript

Estructura del proyecto

```bash
aplicación moviestream/
│
├── servidor.js
├── semilla.js
├── paquete.json
├── .env
│
├── db/
│ └── mongo.js
│
├── rutas/
│ ├── películas.js
│ ├── géneros.js
│ ├── clientes.js
│ └── ventas.js
│
└── public/
    ├── index.html
    ├── películas.html
    ├── géneros.html
    ├── clientes.html
    ├── ventas.html
    └── app.js
```
Instalación

1. Clonar repositorio
2. Instalar dependencias

```bash
instalación de npm
```
3. Configurar variables de entorno

Crea un archivo `.env`:

```env
MONGO_URI=mongodb://a00838335_db_user:A00838335@ac-8skmtgt-shard-00-00.i5ew2fl.mongodb.net:27017,ac-8skmtgt-shard-00-01.i5ew2fl.mongodb.net:27017,ac-8skmtgt-shard-00-02.i5ew2fl.mongodb.net:27017/?ssl=true&replicaSet=atlas-2jb870-shard-0&authSource=admin&appName=Cluster0
```

4. Base de datos seed

```bash
node seed.js
```

5. Iniciar aplicación

```bash
npm start
```

Abrir en el navegador
http://localhost:3000

URL pública:

```txt
https://mongodb-9wpd.onrender.com
```
¿Por qué esta pila?

Esta pila fue seleccionada porque:
- Express es liviano y fácil de integrar con MongoDB
- MongoDB Atlas ofrece alojamiento gratuito en la nube
- Vanilla JavaScript mantiene la interfaz simple
- Bootstrap acelera el desarrollo de UI
