function adminAuthMiddleware(req,res,next){
    if(usuario.id_rol != 2){
        return res.redirect("/login")
    }
    next();
}

module.exports = adminAuthMiddleware;