const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const usersApiController ={
    list : function(req,res) {
        //return res.send('prueba api')
        db.user.findAll()
        .then(users => {
                    
            // Creo un arreglo con los objetos que solo contienen nombre y apellido
            const personas = users.map(result => {
              return {
                iduser: result.iduser,
                first_name: result.first_name,
                last_name: result.last_name,
                email: result.email,
                userDetail: "/users/" + result.iduser,
                idrol: result.id_rol
              };
            });
          
            //return res.send(users)
            let respuesta = {
                meta: {
                    status: 200,
                    count: users.length,
                    url: '/api/users'
                },
                data: personas
                }
            
            res.json(respuesta)
        })
    },
    detail: function(req, res) {
        let idUser=req.params.id; 
        db.user.findByPk(idUser,{
            include:[
                {association: "images"},
            ]
        })
          .then(usuario => {
            delete usuario.dataValues.password
            delete usuario.dataValues.id_rol
            delete usuario.dataValues.id_location
            let respuesta = {
              meta: {
                status: 200,
                url: '/api/users/id'
              },
              data: {
                idUsuario:usuario.idUser,
                name:usuario.first_name,
                lastName:usuario.last_name,
                email:usuario.email,
                codigoPostal:usuario.postal_code,
                numberPhone:usuario.number_phone,
                images: {
                  url: 'http://localhost:3500/images/'+usuario.images.url
              },
                idrol: usuario.id_rol
              }
            } 
            res.json(respuesta);
          })
           },
    giveAdmin: async function(req,res){
      const id = req.params.id;
      try {
            db.user.update({
                id_rol: 2
            },
            {
                where: {iduser: id}
            })
            .then(res.redirect('/'))
        } catch(error) {
              console.log(error)
          }},
     
    removeAdmin: async function(req,res){
      const id = req.params.id;
      try {
            db.users.update({
                id_rol: 1
            },
            {
                where: {iduser: id}
            })
        } catch(error) {
              console.log(error)
          }}
 }

module.exports = usersApiController;