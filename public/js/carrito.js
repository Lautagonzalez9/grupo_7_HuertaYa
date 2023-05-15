let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(carrito);
let precio = document.querySelector('.price')
let nombreProd = document.querySelector('.producto')
let imagen = document.querySelector('.imagen')
const main = document.querySelector(".conteiner")  

if (carrito.length > 0) {
    if (carrito.length <= 1) {
        const primerProducto = carrito[0];
        const precio = document.querySelector('.price');
        const nombreProd = document.querySelector('.producto');

        precio.innerHTML = primerProducto.price;
        nombreProd.innerHTML = primerProducto.title;
        
    } else {
        const main = document.querySelector(".conteiner");
        carrito.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('contenedor-articulos');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <p class="producto">${product.title}</p>
                <p class="price">${product.price}</p>
                <form action="#">
                    <select name="" id="" class="cantidad">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                    </select>                                              
                </form>
                <a href="#" class="delete"><i class="fa-solid fa-trash"></i></a>
            `;
            main.appendChild(productItem);   
        });
    }
}

function eliminarProducto(event) {
    
    const botonEliminar = event.target;
    const indice = parseInt(botonEliminar.dataset.indice);
  
    carrito.splice(indice, 1);
  
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
  
   
    const productoEliminar = botonEliminar.parentNode.parentNode;
    productoEliminar.remove();
  }
  
 
  const botonesEliminar = document.querySelectorAll('.delete');
  botonesEliminar.forEach((boton, indice) => {
    boton.dataset.indice = indice;
    boton.addEventListener('click', eliminarProducto);
  });