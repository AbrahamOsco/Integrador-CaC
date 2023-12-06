const express = require('express');
const path = require('path');
const { shopRouter } = require('./routes/shop.routes.js')
const { adminRouter } = require('./routes/admin.routes.js')
const { mainRouter } = require("./routes/mainRoutes.js") 

const app = express();
const PORT = process.env.PORT || 3000;

// Configuro las vistas para conectar el controller con la carpeta view.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html']}  ) );

app.use('/', mainRouter)
app.use('/shop', shopRouter)
app.use('/admin', adminRouter)


app.use((req, res) => {
	res.sendStatus(404)
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

