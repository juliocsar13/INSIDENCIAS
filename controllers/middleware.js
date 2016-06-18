var jwt = require('jsonwebtoken');

module.exports.checkLogin = function(req,res,next){

    //if (!req.session.token) return res.redirect('/');
    var superSecret = "ilovescotchyscotch";

    jwt.verify(req.session.token,superSecret,function(err,decoded){
        if(err) return res.redirect('/');
        next();
    })
}
module.exports.checkLogin1 = function(req,res,next){
    if(!req.session.user){
        res.redirect('/login');
    }else{
        res.render('/');
    }
}
