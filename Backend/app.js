'use strict'

//cargar modulos de node para crear el servidor
var express =require('express');
var bodyPArse = require('body-parser');
const bodyParser = require('body-parser');

//ejecutar express (http)
var app = express();

// cargar ficheros rutas

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//activar CORS

//añadir prefijos a rutas

//ruta o metodo de prueba para el api
app.get('/probando', (req, res) => {
    
    return res.status(200).send({
        curso: 'master en framworks js',
        autor: 'victor robles web',
        año: '2024',
        alumno: 'eduardo coca lang'
    });
});

//exportar modulo (fichero actual)
module.exports = app;