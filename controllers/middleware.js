module.exports.checkLogin = function(req,res,next){

    if(req.session.user){

        //var staff = ["ADMINISTRADOR"];
        //var role.user.role;
        //var rolegroup = staff.indexOf(role) != -1 ? "staff":"customer";

        //res.locals.role = role;
        //res.locals.rolegroup = rolegroup;
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
