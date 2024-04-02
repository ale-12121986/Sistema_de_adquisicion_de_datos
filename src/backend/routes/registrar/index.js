const express = require('express')

const routerRegistrar = express.Router()

var pool = require('../../mysql-connector');

routerRegistrar.get('/', function(req, res) {   
    console.log("entre en backend");
    pool.query('SELECT * FROM Bateadora.bateadora', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        console.log("resultado " + result);
        res.send(result);
    });
    //res.send({'mensaje':'Estoy en registrar'}).status(200)
})
module.exports = routerRegistrar