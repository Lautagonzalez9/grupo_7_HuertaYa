function autoLoginMiddleware (req,res,next){
    if(req.session && req.session.usuario){
        usuario = req.session.usuario
    } else if (req.cookies && req.cookies.usuario){
        usuario = req.cookies.usuario
    } else {
        usuario = null
    }
        next();
    } 


module.exports = autoLoginMiddleware;