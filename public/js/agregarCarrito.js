
let botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function agregarAlCarrito(evento) {
  let button = evento.target;
  const item = document.querySelector('.product-details');
  const itemTitle = item.querySelector('h2').textContent;
  const itemPrice = item.querySelector('.price').textContent;
  const itemImage = item.querySelector('img').src;



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
