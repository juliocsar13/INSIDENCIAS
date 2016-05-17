"use strict"
var models = require('../models')

module.exports.createUser = function (req,res){
	models.User.create({
		id:req.body.id,
		username :req.body.username

	}).then(function(){
		res.redirect('/usuarios');
	})
	.catch(function(err){
		res.status(503).send(err.username+" "+err.message);
	})
}

module.exports.renderCreateUser = function (req,res){
	res.render('users/create');
}

module.exports.getAllUsers = function (req,res){
	models.User.findAll().then(function(users){
		res.render('users/index',{users:users});
	});
}
