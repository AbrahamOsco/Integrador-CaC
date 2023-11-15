const express = require('express')

const router = express.Router() // Router para operar con las rutas 

// aca falta obtener el shopController y tambien el adminController. 

const mainController = require("./../controllers/main/mainControllers")
//const shopController = require("./../controllers/shop/shopControllers")
//const adminController = require("./../controllers/admin/adminControllers")



// Routes.js aca haremos los get, post, put, delete necesarios para todas las paginas. 



router.get("/home", mainController.getHome )


// creas el router e inmediatamente lo exportamos. 
module.exports = router;

