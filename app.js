const express = require('express');
const app = express();
const port = process.env.PORT || 3500;
const path = require('path');
const publicPath = path.join(__dirname, '/public');
const rutaMain = require('./routes/main')
const rutaAdmin = require('./routes/admin')
const methodOverride =  require('method-override');
const session = require('express-session');

//Cookies y session
const cookieParser = require('cookie-parser');
app.use(cookieParser('HuertaYa'));

//Middlewares de autenticacion
const bcryptjs = require("bcryptjs");
const autoLoginMiddleware = require('./Middlewares/loginMiddleware');

app.use(autoLoginMiddleware);

app.use(methodOverride('_method')); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
// session
app.use(session({
    secret: 'es un secreto',
    resave:false,
    saveUninitialized:false,
}));

//Carpeta de views
app.set("views",path.join(__dirname,"./src/views"))
//uso estatico
app.use(express.static(publicPath));
//levantar servidor
app.listen (port, ()=>{console.log(`Server iniciado en el puerto ${port}`)});

//ejs
app.set("view engine","ejs");

//Rutas 
app.use('/', rutaMain);
app.use('/admin', rutaAdmin);

