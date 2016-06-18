"use strict"
var models = require('../models')

module.exports.createIncidencia = function (req,res){
	models.Incidencia.create({

        id:req.body.id,
        title:req.body.title,
        description:req.body.description,
        priority:req.body.priority,
        notification_means:req.body.notification_means,
        state:req.body.state,
        registration_date:req.body.registration_date,
        observation:req.body.observation

	}).then(function(incidenciaCreated){
		res.redirect('/incidencia');
	})

	.catch(function(err){
		res.status(503).send(err.username+" "+err.message);
	})
}

module.exports.renderIncidencia = function(req,res){
		res.render('costumer/index',{title:'OSIS'})
}

module.exports.getAllIncidencia = function(req,res){
    models.Incidencia.findAll().then(function(incidencias){

        res.render('create',{incidencias:incidencias})
    })
}
