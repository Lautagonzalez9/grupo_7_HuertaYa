
const formulario = document.querySelector('.formulario-registro');
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const codPostalInput = document.querySelector('#codPostal');
const numeroDeTelefonoInput = document.querySelector('#numberPhone');


formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  
 
  if (nombreInput.value === '') {
    alert('Por favor, ingrese su nombre');
    nombreInput.focus();
    return false;
  }
  
 
  if (apellidoInput.value === '') {
    alert('Por favor, ingrese su apellido');
    apellidoInput.focus();
    return false;
  }
  
  
  if (emailInput.value === '') {
    alert('Por favor, ingrese su correo electrónico');
    emailInput.focus();
    return false;
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    alert('Por favor, ingrese una dirección de correo electrónico válida');
    emailInput.focus();
    return false;
  }
  
  
  if (passwordInput.value === '') {
    alert('Por favor, ingrese su contraseña');
    passwordInput.focus();
    return false;
  }
  
  
  if (codPostalInput.value === '') {
    alert('Por favor, ingrese su código postal');
    codPostalInput.focus();
    return false;
  }
  
  
  if (numeroDeTelefonoInput.value === '') {
    alert('Por favor, ingrese su número de teléfono');
    numeroDeTelefonoInput.focus();
    return false;
  } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(numeroDeTelefonoInput.value)) {
    alert('Por favor, ingrese un número de teléfono válido. El número debe empezar con el símbolo "+"');
    numeroDeTelefonoInput.focus();
    return false;
  }
  
 
  formulario.submit();
});
