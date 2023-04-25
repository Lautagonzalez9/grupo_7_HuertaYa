
let botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function agregarAlCarrito(evento) {
  let button = evento.target;
  let item = button.closest('.producto');
  let itemTitle = item.querySelector('.producto-detalle h3').textContent;
  let itemPrice = item.querySelector('.precio').textContent;
  let itemImage = item.querySelector('.imagen-producto').src;

  let newItem = {
    title: itemTitle,
    price: itemPrice,
    image: itemImage,
  };

  carrito.push(newItem);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  console.log(newItem);
}

for (let i = 0; i < botonesAgregarCarrito.length; i++) {
  let button = botonesAgregarCarrito[i];
  button.addEventListener('click', agregarAlCarrito);
  
}
  

console.log(JSON.parse(localStorage.getItem('carrito')));
