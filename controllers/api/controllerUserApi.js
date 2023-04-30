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
    }
}

module.exports = usersApiController;