"use strict"
var models = require('../models')

module.exports.createStaff = function(req,res){
    models.Staff.create({
        id:req.body.id,
        dni:req.body.dni,
        password:req.body.password,
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        role:req.body.role,
        dependence:req.body.dependence,
        register_date_staff:req.body.register_date_staff,
        recorder:req.body.recorder

    }).then(function(userstaff){
        res.redirect('/usuarios')
    })
    .catch(function(err){
        res.status(503).send(err.name+" "+err.message);
    })
}
module.exports.getAllStaff = function(req,res){
    models.Staff.findAll().then(function(userstaff){
        models.Dependence.findAll().then(function(dependences){
            res.render('staff/index',{userstaff:userstaff,dependences:dependences})
        })
    })
}
