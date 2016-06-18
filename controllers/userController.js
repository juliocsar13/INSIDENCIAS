"use strict"
var models = require('../models')

module.exports.createPerson = function (req,res){
	models.Person.create({

        id:req.body.id,
		dni:req.body.dni,
		name :req.body.nombre,
        lastname:req.body.lastname,
		email:req.body.email,
		phone:req.body.phone,
		role:req.body.role,
		dependence:req.body.dependence,
		register_date_person:req.body.register_date_person,
        personAdmin:req.body.personAdmin

	}).then(function(users){
		res.redirect('/usuarios');
	})
	.catch(function(err){
		res.status(503).send(err.name+" "+err.message);
	})
}
module.exports.renderPerson = function (req,res){
	res.render('users/index');
}
module.exports.getAllPerson = function (req,res){
	models.Person.findAll().then(function(users){
		res.render('users/index',{users:users});
	});
}
