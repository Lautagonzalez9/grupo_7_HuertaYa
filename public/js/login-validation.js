window.onload=function(){
   const db = require('../src/database/models');
   const User = require('../models/User')
   const bcryptjs = require("bcryptjs");  
   const capturaFormulario=document.querySelector('.formulario');
   console.log(capturaFormulario)

   capturaFormulario.addEventListener("submit", async (event) => { 
      event.preventDefault();
        let correoElectronico=document.querySelector('input.correo');
        let contraseñaLogin=document.querySelector('.contraseña')

        // validacion con alert en pantalla
        // if(correoElectronico.value == ""){
        //   alert("Debe ingresar correo electronico para iniciar sesión")
        // };
        // if(contraseñaLogin.value == ""){
        //     alert("Ingrese contraseña para iniciar sesión")
        // }
        
        // validacion con ciclo for y array de errores
         let erroresLogin= [];
        
         if (correoElectronico.value == ""){
            erroresLogin.push("Debe ingresar correo electronico para iniciar sesión")
         };
         db.user.findAll({
            where:{
              email: req.body.email
            }
          }).then(users =>{if(users.length > 0){
            const user = users[0];
            console.log(user.password);  
            if(! bcryptjs.compare(req.body.password, user.password)){
               res.render('./users/login.ejs',{
                  errors: {
                        contrasenia: {
                         msg: 'La contraseña es incorrecta'
                         }
         }})
          }}
         let ulErroresLogin=document.querySelector("div .erroresLogin ul");

         if(erroresLogin.length >0){
            event.preventDefault();
            
            ulErroresLogin.innerHTML=""
            for (let error of erroresLogin) {
                ulErroresLogin.innerHTML += "<li>" + error + "</li>"
            }
        
         }
    })
   })
}
