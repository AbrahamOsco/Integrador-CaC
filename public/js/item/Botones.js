const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantity = document.querySelector('#quantity');

// Aumentar la cantidad
add.addEventListener('click', () => {
  let newQuantity = Number(quantity.value) + 1;
  if (newQuantity >= 0) {
    quantity.value = newQuantity;
  }
  validateQuantity();
});

// Disminuir la cantidad
subtract.addEventListener('click', () => {
  let newQuantity = Number(quantity.value) - 1;
  if (newQuantity >= 0) {
    quantity.value = newQuantity;
  }
  validateQuantity();
});

// Validar la cantidad en el evento "change"
quantity.addEventListener('change', () => {
  validateQuantity();
});

// Función para validar y asegurarse de que la cantidad no sea menor a 0
function validateQuantity() {
  let cantidad = parseInt(quantity.value);
  if (isNaN(cantidad) || cantidad < 0) {
    quantity.value = 0;
  }
}

