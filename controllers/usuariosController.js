// Controladores utilizados para el manejo de rutas del login , register .
const fs = require('fs');
const path = require('path');
const db = require('../src/database/models');
const usuariosPathFile =  path.join(__dirname, './data/usuarios.json');
const usuariosDB = JSON.parse(fs.readFileSync(usuariosPathFile, 'utf-8'));
const User = require('../models/User')
const bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');
const { Console, log } = require('console');


function guardarImagen(req,res){
  return  db.images.create({
        url: req.file.filename
    })
}

const usuariosController={
    register:function(req,res){
        res.render('registerForm')
    },
    
    registrado: function(req,res){
        if (req.file) {
            guardarImagen(req)
              .then(function (imagen) {
                db.user.create({
                  first_name: req.body.Nombre,
                  last_name: req.body.Apellido,
                  email: req.body.email,
                  password: bcryptjs.hashSync(req.body.password, 10),
                  postal_code: req.body.codigoPostal,
                  id_location: req.body.Localidad,
                  number_phone: req.body.numeroDeTelefono,
                  id_image: imagen.idimage,
                  
                })
                .then(function() {
                  res.redirect('/login');
                })
                .catch(function(error) {
                  console.log(error);
                  res.status(500).send({ message: 'Error interno del servidor' });
                });
              })
              
          }else {
            db.user.create({
              first_name: req.body.Nombre,
              last_name: req.body.Apellido,
              email: req.body.email,
              password: bcryptjs.hashSync(req.body.password, 10),
              postal_code: req.body.codigoPostal,
              id_location: req.body.Localidad,
              number_phone: req.body.numeroDeTelefono,
              id_image: 1,
            })
            .then(function() {
              res.redirect('/login');
            })
          }
          

    },

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