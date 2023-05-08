const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const usersApiController ={
    list : function(req,res) {
        //return res.send('prueba api')
        db.user.findAll()
        .then(users => {
            //return res.send(users)
            let respuesta = {
                meta: {
                    status: 200,
                    count: users.length,
                    url: '/api/users'
                },
                data: users                    
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
                  url: `http://localhost:3500/${usuario.images.url}`
              }
              }
            } 
            res.json(respuesta);
          })
           }
    
}

module.exports = usersApiController;