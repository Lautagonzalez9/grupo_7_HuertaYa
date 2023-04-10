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
const { response } = require('express');


function guardarImagen(req,res){
  return  db.images.create({
        url: req.file.filename
    })
}

const usuariosController={
    register:function(req,res){
        res.render('registerForm')
    },
    
    registrado: async function(req,res){
      let municipios = await fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre&max=30').then(response=> response.json())
      
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
    list:function(req,res){
       db.user.findAll()
        .then(function(users){
           return res.render('./users/listUsers',{users:users})
       })
       },
       
    
    edit: async function(req,res){
      db.user.findByPk(req.params.id)
      .then(function(users){
        return res.render('./users/updateUsers', {users})})

    },
    update: function(req,res) {
      db.user.update({
        first_name: req.body.Nombre,
        last_name: req.body.Apellido,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        postal_code: req.body.codigoPostal,
        id_location: req.body.Localidad,
        number_phone: req.body.numeroDeTelefono,
        id_image: imagen.idimage,
      },{
        where: {id: req.params.id}
      }).then(function() {
        res.redicrect('./users/login.ejs')
      }).catch(function(error) {
        console.log(error);
        res.status(500).send({ message: 'Error interno del servidor' });
      });
    },

    login:function(req,res){
        res.render('./users/login.ejs')
    },
    validateLogin: function(req,res){
        db.user.findAll({
          where:{
            email: req.body.email
          }
        }).then(users =>{if(users.length > 0){
          const user = users[0];
          console.log(user.password);
          if(bcryptjs.compare(req.body.password, user.password)){
                  
                   //guardado de cookies de usuario
                   if(req.body.recordarme == "on"){
                       res.cookie("recordarUsuario", user, {maxAge: 3600000})
                   };
                                       
                   //guardado de la session
                   req.session.usuario = user;

                   //nos aseguramos de guardar las session antes de continuar
                   //req.session.save();
                   res.redirect('/');
                   
               
             
           } else {
             res.render('./users/login.ejs',{
            errors: {
                  contrasenia: {
                   msg: 'La contraseña es incorrecta'
                   }
             },
             old: req.body.email
          });
       }
        } else {
        
        res.render('./users/login.ejs',{
         errors: {
               email: {
                msg: 'El mail no se encuentra registrado'
             }
          },
          old: req.body.email
      });
               }
      })
  
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