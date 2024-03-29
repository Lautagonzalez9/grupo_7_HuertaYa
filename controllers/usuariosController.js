// Controladores utilizados para el manejo de rutas del login , register .
const fs = require('fs');
const path = require('path');
const db = require('../src/database/models');
const bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');
const { Console, log } = require('console');
const { response } = require('express');
const fetch = require('node-fetch');


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
      console.log(bcryptjs.hashSync(req.body.password, 10));
      let errors = validationResult(req)
      if(errors.isEmpty()){ 
        const emailValidacion = await db.user.findOne({ where: { email: req.body.email } }) 
        if(emailValidacion){
          errors.errors.push({
            param: 'email',
            msg: 'El correo electrónico ya está registrado',
            value: req.body.email
          });
          let municipios = await fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre&max=30').then(response => response.json());
          res.render('./users/registerForm', { municipios: municipios.municipios, errors: errors.mapped(), old: req.body });
        } else {
       
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
          }} } else{
            let municipios = await fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre&max=30').then(response=> response.json())
            res.render('./users/registerForm', {municipios: municipios.municipios, errors: errors.mapped(), old: req.body})
          }
          

    },
    list:function(req,res){
       db.user.findAll()
        .then(function(users){
           return res.render('./users/listUsers',{users:users})
       })
       },
       
    
    edit: async function(req,res){
      let municipios = await fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre&max=30').then(response => response.json())
      db.user.findByPk(req.params.id)
      .then(function(users){
       //return res.json(users)})
        return res.render('./users/updateUsers', {users, municipios: municipios.municipios})})

    },
    update: function(req,res) {
      console.log(req.body)
      if (req.file) {
        guardarImagen(req)
          .then(function (imagen) {
            db.user.update({
              first_name: req.body.Nombre,
              last_name: req.body.Apellido,
              email: req.body.email,
              postal_code: req.body.codigoPostal,
              id_location: req.body.Localidad,
              number_phone: req.body.numeroDeTelefono,
              id_image: imagen.idimage,
            }, {
              where: {iduser: req.params.id}
             }).then(function() {
              
              res.redirect('/profile');
            }).catch(function(error) {
              console.log(error);
              res.status(500).send({ message: 'Error interno del servidor' });
            });
          });
      } else {
        db.user.update({
          first_name: req.body.Nombre,
          last_name: req.body.Apellido,
          email: req.body.email,
          postal_code: req.body.codigoPostal,
          id_location: req.body.Localidad,
          number_phone: req.body.numeroDeTelefono,
        }, {
          where: { iduser: req.params.id }
        }).then(function() {
          console.log('Usuario Actualizado Correctamente')
          console.log(req.body)
          res.redirect('/profile');
        }).catch(function(error) {
          console.log(error);
          res.status(500).send({ message: 'Error interno del servidor' });
        });
      }
    },
    
    login:function(req,res){
        res.render('./users/login.ejs')
    },
    validateLogin: function(req, res) {
      db.user.findAll({
        where: {
          email: req.body.email
        }
      }).then(users => {
        
      // console.log(users[0].dataValues);
        if(users.length > 0) {
          const user = users[0];
          bcryptjs.compare(req.body.password, user.dataValues.password)
            .then((passwordsMatch) => {
              console.log(passwordsMatch);
              if(passwordsMatch) {
                if(req.body.recordarme == "on") {
                  res.cookie("recordarUsuario", user, {maxAge: 3600000});
                }
                req.session.usuario = user;
                res.redirect('/');
              } else {
                res.render('./users/login.ejs', {
                  errors: {
                    contrasenia: {
                      msg: 'La contraseña es incorrecta'
                    }
                  },
                  old: req.body.email
                });
              }
            });
        } else {
          res.render('./users/login.ejs', {
            errors: {
              email: {
                msg: 'El mail no se encuentra registrado'
              }
            },
            old: req.body.email
          });
        }
      });
    }
    ,
    profile : async (req,res)=>{
        const usuario = req.session.usuario
        const usuarioImage = usuario ? usuario.id_image : null;
        const imagen = await db.images.findByPk(usuarioImage)
        console.log(usuario);
        return res.render('./users/profileIndex', {
          imagen: imagen
      });
    },
    logout: (req,res)=>{
        req.session.destroy();
        res.cookie('recordarUsuario', '', {maxAge: 0});
        res.redirect('/');
    }
}

module.exports = usuariosController;