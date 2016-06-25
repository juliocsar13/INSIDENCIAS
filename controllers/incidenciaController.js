"use strict"
var models = require('../models')

module.exports.createIncidencia = function (req,res){
	models.Incidencia.create({

        id:req.body.id,
        title:req.body.title,
        description:req.body.description,
        priority:req.body.priority,
		state:req.body.state,
		registration_date:req.body.registration_date,
		comment:req.body.comment,
		notificacionMeans:req.body.notificacionMeans,
		userRegister:req.body.userRegister,
		dependence:req.body.dependence,
		technical:req.body.technical

	}).then(function(incidencias){
		res.redirect('/incidencias');
	})

	.catch(function(err){
		res.status(503).send(err.id+" "+err.message);
	})
}

module.exports.renderIncidencia = function(req,res){
		res.render('incidencias/index',{title:'OSIS'})
}

module.exports.getAllIncidencia = function(req,res){

    models.Incidencia.findAll().then(function(incidencias){
		models.Person.findAll().then(function(usersIncidencias){
			res.render('incidencias/index',{incidencias:incidencias,usersIncidencias:usersIncidencias})
		})
    })
}
