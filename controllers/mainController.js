const path = require('path');
const fs = require('fs');
const db = require('../src/database/models');
const fetch = require('node-fetch');
const { response } = require('express');

const mainController = {
    index : function(req,res){
        res.render('index')
       
    },
    search: (req, res) => {
		const search = req.query.keywords;
		db.products.findAll({
            include: ['images'],
            where: {
                name:{[db.Sequelize.Op.like] : "%"+search+"%" }
            }
        }).then(producto =>{res.render('./products/searchResult',{producto});})
		
	},
    carrito: function(req,res){
        res.render('./products/carrito')
        
    },
    register: function(req,res){
        fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre&max=30')
            .then(response => response.json())
                .then(mun => {
                   let municipios = mun.municipios 
                    res.render('./users/registerForm',{municipios});
                })
    },
    login: function(req,res){
        res.render('./users/login')
       
    },
    detalleDeProducto: function(req,res){
        res.render('./products/detalle-del-producto')
    },
  
}

module.exports = mainController;