var express = require('express');
var router = express.Router();
var users = require('./users')
//var costumer = require('./costumer')

var middleware  = require('../controllers/middleware')
/* GET home page. */

router.get('/',middleware.checkLogin,function(req,res){
    return res.render('index_staff',{title:'SERV-TI'})
})

router.use('/usuarios',middleware.checkLogin,users);
//router.use('/cliente',middleware.checkLogin,costumer);

router.route('/login')
    .get(function(req,res){
        res.render('login/index',{title:'LOGIN'})
    })
    .post(function(req,res){
        if(req.body.username == 'julio' && req.body.password == '123456'){
            req.session.user = req.body.username;
            res.redirect('/')
        }else{
            res.send('FAIL IN LOGGER')
        }
    })

router.get('/logout',function(req,res){
    req.session.user = null;
    res.redirect('/login')
})
module.exports = router;
