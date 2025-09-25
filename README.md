Alumno: Juan Cruz Rodríguez
Materia: Aplicaciones Híbridas
Profesor: Jonathan Emanuel Cruz

Comisión: DWN4AV

# API REST de Películas y Series

API REST desarrollada con **Node.js**, **Express** y **MongoDB**, que permite gestionar información de películas y series. Permite operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para ambos recursos, así como gestión de usuarios.

---

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Instalación](#instalación)
3. [Uso](#uso)
4. [Rutas de la API](#rutas-de-la-api)
   - [Películas](#películas)
   - [Series](#series)
   - [Usuarios](#usuarios)

---

## Descripción

Esta API permite:

- Listar, agregar, modificar y eliminar películas.
- Listar, agregar, modificar y eliminar series.
- Gestionar usuarios.

Los datos se almacenan en una base de datos **MongoDB**, y se utilizan **modelos de Mongoose** para definir la estructura de películas, series y usuarios.

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/JuanCruzRodriguez/API-REST.git
```

2. Instalar dependencias:

```bash
cd API-REST
npm install
```

3. Configurar variables de entorno en un archivo .env:

```bash
PORT=3000
URI_DB=mongodb://127.0.0.1:27017/miapi
```

4. Iniciar el servidor:

```bash
npm start
```

---

## Estructura de Carpetas

```bash
API-REST/
│
├─ controllers/
│   ├─ peliculasController.js
│   └─ seriesController.js
│   └─ userController.js
│
├─ models/
│   ├─ peliculasModel.js
│   ├─ seriesModel.js
│   └─ userModel.js
│
├─ routers/
│   ├─ peliculasRouter.js
│   ├─ seriesRouter.js
│   └─ userRouter.js
│   └─ index.js
│
├─ public/
│   ├─ index.html
│   └─ style.css
│
├─ .env
├─ package.json
└─ index.js
```

---

## Endpoints

###Películas
| Método | Endpoint           | Descripción                |
| ------ | ------------------ | -------------------------- |
| GET    | /api/peliculas     | Listar todas las películas |
| GET    | /api/peliculas/:id | Obtener película por ID    |
| POST   | /api/peliculas     | Crear nueva película       |
| PUT    | /api/peliculas/:id | Actualizar película por ID |
| DELETE | /api/peliculas/:id | Eliminar película por ID   |

Ejemplo JSON para POST /api/peliculas
```bash
{
    "titulo": "Matrix",
    "descripcion": "Un hacker descubre la realidad virtual que domina la humanidad",
    "director": "Lana Wachowski",
    "anio": 1999,
    "genero": "Ciencia Ficción",
    "favorita": true
}
```

###Series
| Método | Endpoint        | Descripción             |
| ------ | --------------- | ----------------------- |
| GET    | /api/series     | Listar todas las series |
| GET    | /api/series/:id | Obtener serie por ID    |
| POST   | /api/series     | Crear nueva serie       |
| PUT    | /api/series/:id | Actualizar serie por ID |
| DELETE | /api/series/:id | Eliminar serie por ID   |

Ejemplo JSON para POST /api/series
```bash
{
    "titulo": "Stranger Things",
    "descripcion": "Niños descubren fenómenos paranormales en su pueblo",
    "genero": "Ciencia Ficción / Misterio",
    "temporadas": 4,
    "favorita": true
}
```

###Usuarios
| Método | Endpoint   | Descripción               |
| ------ | ---------- | ------------------------- |
| GET    | /api/users | Listar todos los usuarios |
| POST   | /api/users | Crear nuevo usuario       |

Ejemplo JSON para POST /api/users
```bash
{
    "name": "Juan Pérez",
    "email": "juan@mail.com",
    "password": "123456"
}
```




Licencia

Este proyecto está bajo la Licencia MIT.

