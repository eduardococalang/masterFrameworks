'use strict';

var controller = {

    datosCurso: (req, res) => {
        var hola = req.body.hola;

    app.get("/probando", (req, res) => {
        return res.status(200).send({
          curso: "master en framworks js",
          autor: "victor robles web",
          año: "2024",
          alumno: "eduardo coca lang",
          hola
        });
      });

}, 

    test: (req, res) => {
        return res.status(200).send({
            message: 'soy la accion test de mi controlador de articulos'
        });
    }

}; // end controller

module.exports = controller;