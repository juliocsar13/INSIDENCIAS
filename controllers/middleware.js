var jwt = require('jsonwebtoken');

module.exports.checkLogin = function(req,res,next){
    var token = req.session.token;

    if (!req.body.token) return res.redirect('/login');

    var secret = "ilovescotchyscotch";

    jwt.verify(token,secret,function(err,decoded){
        if(err) return res.redirect('/login');
        req.decoded = decoded;
        
        next();
    })
}

module.exports.checkLogin1 = function(req,res,next){
    if(req.session.user){
        next();
    }else{
        res.redirect('/login');
    }
}
