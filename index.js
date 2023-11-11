const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const shopRoutes = require('./routes/shopRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', mainRoutes.home);
app.use('/contact', mainRoutes.contact);
app.use('/about', mainRoutes.about);
app.use('/faqs', mainRoutes.faqs);

app.use('/shop', shopRoutes.shop);
app.use('/shop/item', shopRoutes.item);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
