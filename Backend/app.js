'use strict'

//cargar modulos de node para crear el servidor
var express = require("express");
var bodyParser = require("body-parser");
const bodyParser = require("body-parser");

//ejecutar express (http)
var app = express();

// cargar ficheros rutas

var article_routes = require('./routes/article');

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//activar CORS

//añadir prefijos a rutas / cargar rutas
app.use('/api', article_routes);


//exportar modulo (fichero actual)
module.exports = app;
