window.onload=function(){

    const capturaFormulario=document.querySelector('.formulario');
    console.log(capturaFormulario)

    capturaFormulario.addEventListener("submit",function(event){
      //event.preventDefault();
        let correoElectronico=document.querySelector('input.correo');
        let contraseñaLogin=document.querySelector('input.contraseña')

        // validacion con alert en pantalla
        // if(correoElectronico.value == ""){
        //     alert("Debe ingresar correo electronico para iniciar sesión")
        // };
        // if(contraseñaLogin.value == ""){
        //     alert("Ingrese contraseña para iniciar sesión")
        // }
        
        // validacion con ciclo for y array de errores
         let erroresLogin= [];
        
         if (correoElectronico.value == ""){
            erroresLogin.push("Debe ingresar correo electronico para iniciar sesión")
         };
         if (contraseñaLogin.value == ""){
            erroresLogin.push("Ingrese contraseña para iniciar sesión")
         }
         let ulErroresLogin=document.querySelector("div .erroresLogin ul");

         if(erroresLogin.length >0){
            event.preventDefault();
            
            ulErroresLogin.innerHTML=""
            for (let error of erroresLogin) {
                ulErroresLogin.innerHTML += "<li>" + error + "</li>"
            }
        
         }
    })



}