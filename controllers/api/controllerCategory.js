const db = require('../../src/database/models');
const sequelize = db.sequelize;

const path = require('path')

module.exports ={
    category: async function(req,res){
    db.categories.findAll()
        .then(categories => {
            let respuesta = {
             categories
            }
        res.json(respuesta)
        })
  
}}
