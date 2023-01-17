const express = require('express');
const app = express();
const port = 3500;
const path = require('path');
const publicPath = path.join(__dirname, '/public');
const rutaMain = require('./routes/main')


//uso estatico
app.use(express.static(publicPath));
//levantar servidor
app.listen (3500, ()=>{console.log('Servidor con puerto 3500 corriendo')});

//ejs
app.set("view engine","ejs");

//Rutas 
app.use('/', rutaMain);

