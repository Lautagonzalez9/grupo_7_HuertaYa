// Controladores utilizados para el manejo de rutas del login , register .
const fs = require('fs');
const path = require('path');

const usuariosPathFile =  path.join(__dirname, './data/usuarios.json');
const usuariosDB = JSON.parse(fs.readFileSync(usuariosPathFile, 'utf-8'));
const User = require('../models/User')
const bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator')





const usuariosController={
    register:function(req,res){
        res.render('registerForm')
    },
    registrado: function(req,res){
        let dataUser = usuariosDB;
        
        // console.log(req.body.contrasenia)

        const usuarioForm ={
            id: dataUser.length > 0 ? dataUser[dataUser.length -1].id + 1 : 1,
            ...req.body,
            contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
            imagen: req.file?.filename ? req.file.filename : "default-image.png"
        }

        // console.log(usuarioForm)
        let pushingUser;
        let errors = validationResult(req);
        if(errors.isEmpty()){ 
        if (typeof dataUser === 'object') {
            pushingUser = dataUser;
          } else {
            pushingUser = JSON.parse(dataUser);
          }
        pushingUser.push(usuarioForm);

        usuarioJson = JSON.stringify(pushingUser, null, 2);

        fs.writeFileSync(path.join(__dirname, './data/usuarios.json'), usuarioJson);

        res.redirect('/login')
        }else{
            res.render( 'users/registerform', { errors : errors.mapped(), old: req.body})   
        }

        

    }



,

    login:function(req,res){
        res.render('login')
    },
    validateLogin:function(req,res){
      //prueba
       // return res.send(req.body)
        let userToLogin = User.findByField("Email", req.body.email);
        return res.send(userToLogin);
       if(userToLogin){
            //para guardar al usuario en session
           // req.session.userLogged=userToLogin
            //prueba
            //let isOkPassword=bcryptjs.compareSync(req.body.password, userToLogin.Contraseña;
            // if(isOkPassword){
                // return res.send('ok puedes ingresar);
            // }
           if(bcryptjs.compareSync(req.body.password, userToLogin.Contraseña)){
              req.session.userLogged=userToLogin;
               return res.send('Adentro')
              
            } 
            return res.render('login',{
             errors: {
                   contraseña: {
                    msg: 'La contraseña es incorrecta'
                    }
              }
           });
         }
         
       return res.render('login',{
          errors: {
                email: {
                 msg: 'El mail no se encuentra registrado'
              }
           }
       });
       

        let usuarioIngresado = req.body.email;
        let passwordIngresada = req.body.password;

        //guardado de cookies de usuario
        if(req.body.recordarme == "on"){
            res.cookie("recordarUsuario", req.body, {maxAge: 3600000})
            }
        res.redirect('/')
    },
    profile :(req,res)=>{
        return res.render('profileIndex')
    }
}

module.exports = usuariosController;