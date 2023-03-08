function guestRedirectMiddleware(req,res,next){
    if(!usuario){
        return res.redirect("/login")
    }
    next();
}

module.exports = guestRedirectMiddleware;