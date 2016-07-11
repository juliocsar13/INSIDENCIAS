'use strict'

var models = require('../models')

module.exports.createDependence = function(req,res){
    models.Dependence.create({
        id:req.body.id,
        nameDependence:req.body.nameDependence,
        siglas:req.body.siglas

    }).then(function(dependences){
        res.redirect('/dependencias')
    })
    .catch(function(err){
    	res.status(503).send(err.id+" "+err.message);
    })
}

module.exports.getAllDependence = function(req,res){
    models.Dependence.findAll().then(function(dependences){
        res.render('dependence/index',{dependences:dependences});
    });
}
