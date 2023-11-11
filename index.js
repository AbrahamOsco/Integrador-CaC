const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// extensions html sirve: 1)Enviar htmls sin especificar el (.html al final).
// 2) Acceder a : localhost:3000/index sin agregar el (.html al final).
app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html']}  ) );

const rutas = require("./routes/routes")
app.use('/', rutas)

// Avance de @Aana
/* 
app.use('/home', mainRoutes.home);
app.use('/contact', mainRoutes.contact);
app.use('/about', mainRoutes.about);
app.use('/faqs', mainRoutes.faqs);

app.use('/shop', shopRoutes.shop);
app.use('/shop/item', shopRoutes.item);
*/



app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});