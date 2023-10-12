document.addEventListener('DOMContentLoaded', function() {
  // Obtén los elementos del DOM
  const inputCantidad = document.getElementById('cantidadItems');
  const btnMas = document.getElementById('btnMas');
  const btnMenos = document.getElementById('btnMenos');

  // Función para aumentar la cantidad
  btnMas.addEventListener('click', () => {
    let cantidad = parseInt(inputCantidad.value);
    if (!isNaN(cantidad)) {
      cantidad++;
      inputCantidad.value = cantidad;
    }
  });

  // Función para disminuir la cantidad
  btnMenos.addEventListener('click', () => {
    let cantidad = parseInt(inputCantidad.value);
    if (!isNaN(cantidad) && cantidad > 0) {
      cantidad--;
      inputCantidad.value = cantidad;
    }
  });

  // Validación en el evento "change"
  inputCantidad.addEventListener('change', () => {
    let cantidad = parseInt(inputCantidad.value);
    if (isNaN(cantidad) || cantidad < 0) {
      inputCantidad.value = 0;
    }
  });
});

