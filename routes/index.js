'use strict'

var express         = require('express');
var router          = express.Router();
var jwt             = require('jsonwebtoken')
var users           = require('./users')
var incidencias     = require('./incidencias')

var middleware      = require('../controllers/middleware')
var models = require('../models')

router.get('/',function(req,res){

    return res.render('index',{title:'OSIS'})

})

router.use('/usuarios',users);
router.use('/incidencias',incidencias)

router.route('/login')
    .get(function(req,res){
        res.render('login/index',{title:'OSIS'})
    })

    .post(function(req,res){
        models.Person.findAndCountAll({
                where:{
                    dni:req.body.dni,
                    password:req.body.password
                }
            }
        ).then(function(user){
            console.log('DEVUELVE UN OBJETO : ',user)
            if(user.count!=0){
                req.session.user= req.body.dni;
                res.redirect('/')
            }
        })
    })

router.get('/logout',function(req,res){
    req.session.dni = null;
    res.redirect('/login')
})


module.exports = router;



/*var credentiales = {
    dni:req.body.dni,
    password: req.body.password
}
models.User.findOne(credentiales,function(err,user,count){
    if(err){return res.status(500)}
    if(!user){return res.status(404)}

    var token = jwt = sign(user,superSecret);
    return res.status.json(token);
})
req.session.token = req.body.token;
console.log('TOKEN BODY',req.body.token)
*/
