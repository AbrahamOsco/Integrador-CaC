const mainModel = require('../models/main/mainModel') 

const path = require('path');

const db = require('../models/mysql/connectionDB')

// Creo una promesa entonces la funcion debe ser async
const getLicences = async () => {
  return new Promise( (resuelta, rechazada) => {
    db.connection.query('SELECT * FROM licence', function(error, results, fields){
      if (error) {
        console.error('Error al ejecutar la consulta -> getLicences:\n');
        throw error;
      }
      resuelta(results);  // Asigno el results a resuelta. 
    } )
  });  
}

const getProductsTop3 = async () => {
  return new Promise( (resuelta, rechazada) => {
    db.connection.query(' SELECT * FROM product p INNER JOIN licence l ON l.licence_id = p.licence_id LIMIT 3;' , function(error, results, fields){
      if (error) {
        console.error('Error al ejecutar la consulta -> getProducts:\n');
        throw error;
      }
      resuelta(results);  // Asigno el results a resuelta. 
    } )
  });  
}



const getHome = async (req, res) => {
  try{
    const queryLicences = await getLicences();  // retorno la rspt positiva
    const queryProductsTop3 = await getProductsTop3();  // retorno la rspt positiva
    res.render('index', {title: 'Comision 23568', licences:queryLicences, productsTop3:queryProductsTop3})   
  } catch (error){
    res.status(500).render('error', { error: 'Error al obtener datos' });
  }
}


module.exports = {
    getHome
}

