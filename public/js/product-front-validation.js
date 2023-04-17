window.onload = function(){

    const form = document.querySelector('form.formulario-registro');

    form.addEventListener('submit',function(event){

        let campoNombre = document.querySelector('input.nombre');
        let campoCategoria = document.querySelector('.categoria');
        let campoPresentacion = document.querySelector('.presentacion');
        let campoPrecio = document.querySelector('input.precio');
        let campoDescuento = document.querySelector('input.descuento');

        let errores = [];

        if(campoNombre.value == ""){
            errores.push("El campo nombre debe ser completado")
        }
        if(campoCategoria.value == ""){
            errores.push("Debes seleccionar una categoria")
        }
        if(campoPresentacion.value == ""){
            errores.push("Debes seleccionar una presentacion")
        }
        if(campoPrecio.value == ""){
            errores.push("Debes ingresar un precio")
        } else if(isNaN(campoPrecio.value)){
            errores.push("Debe ingresar un numero valido en el precio")
        }

        if(campoDescuento.value == ""){
            errores.push("Debes ingresar un descuento")
        } else if(campoDescuento.value < 0 || campoDescuento.value > 100){
            errores.push("El valor del descuento debe estar entre 0 y 100")
        } else if(isNaN(campoDescuento.value)){
            errores.push("Debe ingresar un numero valido en el descuento")
        }

        //print errores
        let ulErrores = document.querySelector('div.errores ul')

        if(errores.length > 0){
            event.preventDefault();

            for(let error of errores){
                ulErrores.innerHTML += "<li>" + error + "</li>"
            }
        }

    });
}