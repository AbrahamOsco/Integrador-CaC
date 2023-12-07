const db = require('../mysql/connectionDB')

const getProducts = async () => {
    return new Promise( (resuelta, rechazada) => {
      db.connection.query('SELECT * FROM product p INNER JOIN licence l ON l.licence_id = p.licence_id LIMIT 15;' , function(error, results, fields){
        if (error) {
          console.error('Error al ejecutar la consulta -> getProductsTop6:\n');
          throw error;
        }
        resuelta(results);  // Asigno el results a resuelta. 
      } )
    });  
  }


module.exports = {getProducts}