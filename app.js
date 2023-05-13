const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3500;
const path = require('path');
const publicPath = path.join(__dirname, '/public');
const rutaMain = require('./routes/main')
const rutaAdmin = require('./routes/admin')
const apiProductRoute = require('./routes/api/products')
const methodOverride =  require('method-override');
const session = require('express-session');
const apiUserRoute = require('./routes/api/users')
const apiImageRoute = require('./routes/api/images')
const apiCategory = require('./routes/api/category')

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(cors({ credentials: true }));
//Cookies y session
const cookieParser = require('cookie-parser');
app.use(cookieParser('HuertaYa'));

//Middlewares de autenticacion
const bcryptjs = require("bcryptjs");
const autoLoginMiddleware = require('./Middlewares/loginMiddleware');
//uso de template
app.set("view engine","ejs");

app.use(methodOverride('_method')); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
// session
app.use(session({
    secret: 'es un secreto',
    resave: false,
    saveUninitialized:false,
    cookie: { maxAge: 1000*60*60*24 }
}));

//Login middleware
app.use(autoLoginMiddleware);

//rutas
app.use('/api/products', apiProductRoute)
app.use('/api/users', apiUserRoute);
app.use('/api/category', apiCategory)
app.use('/', rutaMain);
app.use('/admin', rutaAdmin);
app.use('/images/', apiImageRoute)

//Carpeta de views
app.set("views",path.join(__dirname,"./src/views"))
//uso estatico
app.use(express.static(publicPath));
app.use(cors())
// error 404
app.use((req, res, next) => {
  res.status(404).render('error404', {
    errorCode: 404,
    errorMessage: 'Página no encontrada'
  });
});
//levantar servidor
app.listen (port, ()=>{console.log(`Server iniciado en el puerto ${port}`)});







