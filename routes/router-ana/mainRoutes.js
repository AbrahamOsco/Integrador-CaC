const express = require('express');
const path = require('path');
const mainRoutes = require('./mainRoutes');
const shopRoutes = require('./shopRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes.home);
app.use('/contact', mainRoutes.contact);
app.use('/about', mainRoutes.about);
app.use('/faqs', mainRoutes.faqs);

app.use('../Integrador/pages/shop', shopRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
