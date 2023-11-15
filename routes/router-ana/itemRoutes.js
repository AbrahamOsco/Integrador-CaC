const express = require('express');
const app = express();
const shopRoutes = require('./shopRoutes'); //  ruta  archivo



//  router de la tienda en la ruta principal '/shop'
app.use('/shop', shopRoutes);


//  manejo específico para la ruta GET /shop/item/:id
shopRoutes.get('/item/:id', (req, res) => {
  const itemId = req.params.id;
  
  //   detalles del artículo según el ID
  res.send(`Detalles del artículo con ID ${itemId}`);
});

//  ruta POST /shop/item/:id/add
shopRoutes.post('/item/:id/add', (req, res) => {
    const itemId = req.params.id;
    // Lógica para agregar el artículo al carrito según el ID
    res.send(`Añadir el artículo ${itemId} al carrito`);
  });

//  servidor en el puerto especificado
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
