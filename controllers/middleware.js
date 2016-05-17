module.exports.checkLogin = function(req,res,next){
    if(req.session.user){
        next();
    }else{
        res.redirect('/login');
    }
}
/*
if(req.session.user){
    next();
}else{
    res.redirect('/login')
}


*/
