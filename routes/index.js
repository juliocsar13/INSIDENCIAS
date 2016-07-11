'use strict'

var express         = require('express');
var router          = express.Router();
var jwt             = require('jsonwebtoken')
var staff           = require('./staff')
var costumer        = require('./costumer')
var dependence      = require('./dependence')
var incidencias     = require('./incidencias')

var middleware      = require('../controllers/middleware')
var models          = require('../models')
var secret          = "ilovescotchyscotch";


router.get('/',function(req,res){

    return res.render('index',{title:'OSIS'})

})

router.use('/clientes',costumer);
router.use('/incidencias',incidencias);
router.use('/dependencias',dependence);
router.use('/usuarios',staff)

router.route('/login')
    .get(function(req,res){
        res.render('login/index',{title:'OSIS'})
    })
    .post(function(req,res){
        models.Staff.findAndCountAll({
                where:{
                    dni:req.body.dni,
                    password:req.body.password
                }
            }
        ).then(function(user){
            //console.log('DEVUELVE UN OBJETO : ',user)
            if(user.count!=0){
                var token  = jwt.sign(user,secret);
                req.session.token = token;
                res.cookie(token);
                res.redirect('/');

            }
        })
    });

router.get('/logout',function(req,res){
    req.session.token = null;
    res.redirect('/login')
})

module.exports = router;
