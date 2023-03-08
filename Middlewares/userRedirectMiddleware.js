function userRedirectMiddleware(req,res,next){
    if(usuario){
        return res.redirect("/")
    }
    next();
}

module.exports = userRedirectMiddleware;