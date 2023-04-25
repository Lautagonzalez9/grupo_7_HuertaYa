const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {
    detailProduct: function(req,res){
        let id = req.params.id;
        db.products.findByPk(id,{
            include:[
                {association: "images"},
                {association: "categories"},
                {association: "presentations"}
            ]
        }).then(product => {
            let respuesta = {
                meta:{
                    status: {
                        status: 200,
                        url: '/api/products/:id'
                    },
                    data: product
                } 
            }
        res.json(respuesta)
        })
    }
}