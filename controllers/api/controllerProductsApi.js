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
    },
    listProducts: function(req,res){    
        db.products.findAll({
            include:[
                {association: "images"},
                {association: "categories"},
                {association: "presentations"}
            ]
        }).then(products => {
            let respuesta = {
                meta:{
                    status: {
                        status: 200,
                        url: '/api/products'
                    },
                    //data: {
                    //    count: products.length,
                    //    countByCategory:
                        //    db.category.
                        //     products.categories.map(category => {
                        //         console.log(category)
                        // }
                        // Revisar en la base de datos bien como llamar la categoria
                    //}
                } 
            }
            res.json(respuesta)
            })
    }
}