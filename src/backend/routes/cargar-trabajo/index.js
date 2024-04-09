const express = require('express')

const routerTrabajo = express.Router()

var pool = require('../../mysql-connector');

routerTrabajo.get('/', function(req, res) {
    const id = req.params.id;
    console.log("el dato para consultar en la base de datos", id);
    const sqlQuery = 'SELECT `linea` FROM `trabajo`;';

    pool.query(sqlQuery, function(error, results)  {    
        if (error) {
            res.send(error).status(400);
            return;
        }
        console.log("el resultado es" +results);
        res.send(results).status(200);
    });
    // res.send({'mensaje':'Estoy en dispositivo'}).status(200)
})

module.exports = routerTrabajo