// Controladores utilizados para el manejo de rutas del login , register .
const fs = require('fs');
const path = require('path');

const usuariosPathFile =  path.join(__dirname, './data/usuarios.json');
const usuariosDB = JSON.parse(fs.readFileSync(usuariosPathFile, 'utf-8'));
const User = require('../models/User')
const bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');
const { Console } = require('console');





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
        res.render('./users/login.ejs')
    },
    validateLogin:function(req,res){

        
        let userToLogin = User.findByField("email", req.body.email);
        
         if(userToLogin){

           if(bcryptjs.compareSync(req.body.password, userToLogin.contrasenia)){
                   
                    //guardado de cookies de usuario
                    if(req.body.recordarme == "on"){
                        res.cookie("recordarUsuario", userToLogin, {maxAge: 3600000})
                    };
                                        
                    //guardado de la session
                    req.session.usuario = userToLogin;

                    //nos aseguramos de guardar las session antes de continuar
                    //req.session.save();
                    res.redirect('/');
                    
                
              
            } else {
             return res.render('./users/login.ejs',{
             errors: {
                   contrasenia: {
                    msg: 'La contraseña es incorrecta'
                    }
              },
              old: req.body.email
           });
        }
         } else {
         
        return res.render('./users/login.ejs',{
          errors: {
                email: {
                 msg: 'El mail no se encuentra registrado'
              }
           },
           old: req.body.email
       });
                }
       

        
        

    },
    profile :(req,res)=>{
        return res.render('./users/profileIndex')
    },
    logout: (req,res)=>{
        req.session.destroy();
        res.cookie('recordarUsuario', '', {maxAge: 0});
        res.redirect('/');
    }
}

module.exports = usuariosController;