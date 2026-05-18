Este proyecto rediseño el archivo original de MovieStream para ser un documento orientado en Mongo DB

Me quede usando 4 collecciones:

- movies
- genres
- customers
- sales



1. genres

Representa los generos de las peliculas

Documento ejemplo:

```json
{
  "_id": 1,
  "name": "Action"
}
```

Genero se mantuvo como una colleccion separaa por:
- Generos es utilizado por todas las peliculas
- Operaciones CRUD se hacen más simples
- Generos se pueden manejar de manera separada e independiente

2. movies

Representa las peliculas disponibles

Documento Ejemplo

```json
{
  "_id": 101,
  "title": "Interstellar",
  "year": 2014,
  "runtime": 169,
  "list_price": 12.99,
  "views": 12000,
  "summary": "Space exploration mission to save humanity",
  "genres": ["Sci-Fi", "Drama"],
  "cast": ["Matthew McConaughey", "Anne Hathaway"]
}
```
Genero y Cast fueron embebidos direcamente dentro de Movies por que genero era pequeño y simple, los actores solo era mostrado como información de la pelicula y no require una operación Extra en este caso


3. customers

Representa los clientes de la plataforma

Documento Ejemplo

```json
{
  "_id": 1,
  "first_name": "Kevin",
  "last_name": "Francisco",
  "email": "kevin@test.com",

  "contact": {
    "city": "Monterrey",
    "country": "Mexico"
  },

  "profile": {
    "age": 21,
    "income": 25000,
    "gender": "M",
    "job_type": "Student"
  }
}
```

Los clientes fueron agrupados con su contacto y perfil ya que mejora como Mongo DB organiza la información de manera natural

4. sales

Representa compras de clientes y las peliculas

Documento Ejemplo

```json
{
  "_id": 1001,
  "customerId": 1,
  "movieId": 101,
  "day": "2026-05-01",
  "app": "Web",
  "payment_method": "Card",
  "price": 10,
  "discount": 0,
  "final_price": 10
}
```

Ventas usa referencias en vez de embebidos de customers y movies ya que las ventas pueden incrementar indefinidamente y poner todos los datos harían documentos muy largos con actualizaciones complicadas y reduce escalabilidad

Using references keeps collections smaller and more maintainable.



Queries simples

Peliculas con generos era simple ya que ya venian con su genero

Queries más complicados

Ventas con la pelicula y el cliente

Ya que era referencias, necesitaba jalar la información de el cliente y la pelicula


Opiniones finales

El modelo final prioriza la simplicidad, lectura rapida para peliculas, y transacciones de información para las ventas