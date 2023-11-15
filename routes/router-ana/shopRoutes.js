const express = require('express');
const router = express.Router();

// Ruta para la página de la tienda
router.get('/', (req, res) => {
  res.send('Página de la tienda');
});

// Ruta para ver los detalles de un artículo
router.get('/item/:id', (req, res) => {
  const itemId = req.params.id;
  res.send(`Detalles del artículo ${itemId}`);
});

//  agregar un artículo al carrito (POST)
router.post('/item/:id/add', (req, res) => {
  const itemId = req.params.id;
  //  agregar el artículo al carrito
  res.send(`Añadir el artículo ${itemId} al carrito`);
});

// Ruta para ver el carrito
router.get('/cart', (req, res) => {
  res.send('Página del carrito');
});

// Ruta para agregar un artículo al carrito (POST)
router.post('/cart', (req, res) => {
  //  artículos al carrito
  res.send('Agregar artículos al carrito');
});

module.exports = router;
