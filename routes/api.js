const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize')
const Producto = require('../models').producto



router.get('/productos', function(req, res, next) {
    Producto.findAll({  
         attributes: { exclude: ["updatedAt"] }  
     }) 
     .then(resultado => {  
        res.json(resultado)
    })
     .catch(error => res.status(400).send(error)) 
 });

 router.get('/productos/:id', function(req, res, next) {
    let id_req = req.params.id
    Producto.findOne({
        where:{id:id_req}
    })
     .then(resultado => {  
        res.json(resultado)
    })
     .catch(error => res.status(400).send(error)) 
 });

    
module.exports = router;