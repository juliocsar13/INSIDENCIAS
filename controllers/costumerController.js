"use strict"
var models = require('../models')

module.exports.createCostumer = function (req,res){
	models.Costumer.create({

        id:req.body.id,
		dni:req.body.dni,
		name :req.body.name,
        lastname:req.body.lastname,
		email:req.body.email,
		phone:req.body.phone,
		role:req.body.role,
		register_date_person:req.body.register_date_person,
        recorder:req.body.recorder

	}).then(function(costumers){
		res.redirect('/clientes');
	})
	.catch(function(err){
		res.status(503).send(err.name+" "+err.message);
	})
}
module.exports.renderCostumer = function (req,res){
	res.render('costumer/index');
}

module.exports.getAllCostumer = function (req,res){

	models.Costumer.findAll().then(function(costumers){

		res.render('costumer/index',{costumers:costumers});

	});
}
