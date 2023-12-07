const model = require('../models/main/mainModel') 


const renderHome = async (req, res) => {
  try{
    const queryLicences = await model.getLicences()  // await porque debo esperar una rspt asincronica. sino lo pongo rompe todo. 
    const [queryProductsFirst3, queryProductsLast3] = await model.getProductForIndex() //Elimino desde la posicion 3 los 3 elementos sgt (incluyo la pos 3)
    
    res.render('index', 
    {licences:queryLicences,
     productFirst3:queryProductsFirst3,
     productLast3: queryProductsLast3 })   
  } catch (error){
    res.status(500).render('error', { error: 'Error al obtener datos' });
  }
}


module.exports = {
    renderHome
}

