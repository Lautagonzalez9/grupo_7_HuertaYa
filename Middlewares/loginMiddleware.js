function autoLoginMiddleware (req,res,next){
    if(req.session && req.session.usuario){
        usuario = req.session.usuario
        console.log(usuario);
    } else if (req.cookies && req.cookies.recordarUsuario){
        usuario = req.cookies.recordarUsuario
    } else {
        usuario = null
    }
        next();
    } 


module.exports = autoLoginMiddleware;