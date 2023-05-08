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
                detail: "/users/" + result.iduser
        
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
            let respuesta = {
              meta: {
                status: 200,
                url: '/api/users/id'
              },
              data: usuario
            } 
            res.json(respuesta);
          })
           }
    
}

module.exports = usersApiController;