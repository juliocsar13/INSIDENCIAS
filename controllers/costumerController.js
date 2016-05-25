"use strict"
var models = require('../models')

module.exports.createCostumer = function (req,res){
	models.Costumer.create({

        id:req.body.id,
		nombre :req.body.nombre,
        apellido:req.body.apellido,
        dni:req.body.dni,
        telefono:req.body.telefono,
        email:req.body.email,
        oficina:req.body.oficina,
        departamento:req.body.departamento,
        tipo:req.body.tipo

	})
	.catch(function(err){
		res.status(503).send(err.username+" "+err.message);
	})
}

module.exports.getAllCostumer = function(req,res){
    models.Costumer.findAll().then(function(costumers){
        res.render('costumer/index',{costumers:costumers})
    })
}
