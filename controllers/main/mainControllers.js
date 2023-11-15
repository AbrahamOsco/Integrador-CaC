const mainModel = require('../../models/main/mainModel') // importamos el modelo util en otras paginas que piden peticiones a la dateBase 

// Controller donde se encapsula la respuesta del verbo http y la ruta.  

const path = require('path');   // Necesitamos rutas absolutas por eso necesitamos a path

// __dirname obtenemos el directorio actual a eso  combinado con .. y con .. 
// vamos al directorio padre-padre (subo un padre por cada .. ) finalmente appendeamos public/index.html y obtenemos la ruta final

function getHome(req, res){
    res.sendFile('/public/index.html', {root: path.join(__dirname, '../../')} )
    console.log("[router.js] Entro en la ruta /home\n")
    console.log("productos " + JSON.stringify(mainModel.productos) );  // al arreglo de objeto lo pasamos a un strighfy  y lo printeamos
}

// sendFile le mandamos una ruta relativa, pero sendFile espera rutas absolutas 
// para garantizar la ruta absoluta (usamos __dirname -> variable globla te escupe la ruta absoluta actual)
// con root: le dicimos q busque usando esta raiz y le pasamos el __dirname.


module.exports = {
    getHome
}

