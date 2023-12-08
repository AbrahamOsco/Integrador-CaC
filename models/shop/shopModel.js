const db = require('../mysql/connectionDB')

const getProducts = async () => {
    return new Promise( (resuelta, rechazada) => {
      const aQuery = 'SELECT * FROM product p INNER JOIN licence l ON l.licence_id = p.licence_id LIMIT 15;'
      db.connection.query(aQuery, function(error, results, fields){
        if (error) {
          console.error('Error al ejecutar la consulta -> getProducts:\n');
          throw error;
        }
        resuelta(results);  // Asigno el results a resuelta. 
      } )
    });  
}


// Usamos el '?' para marcar la posicion esto implica que tenemos que crear un array donde la posicion de cada ?
//  corresponde a cada elemento en el array que pasamos. 
const getInfoProduct = async (aProductId) => {
  return new Promise( (resuelta, rechazada) => {
    const aQuery = "SELECT * FROM product p INNER JOIN licence l ON l.licence_id = p.licence_id WHERE product_id = ?;" 
    db.connection.query(aQuery, [aProductId], function(error, results, fields){
    if (error){
        console.error('Error al ejecutar la consulta -> getInfoProduct:\n');
        throw error;
    }
    resuelta(results)
    })
  });
}

const get3ProductsExceptIdProduct = async (idDelete) => {
  return new Promise( (resuelta, rechazada) => {
    const aQuery = "SELECT * FROM product p INNER JOIN licence l ON l.licence_id = p.licence_id WHERE product_id !=? ORDER BY RAND() LIMIT 3;"  
    db.connection.query(aQuery, [idDelete], function(error, results, fields){
    if (error){
        console.error('Error al ejecutar la consulta -> getInfoProduct:\n');
        throw error;
    }
    resuelta(results)
    })
  });
}


module.exports = {getProducts, getInfoProduct, get3ProductsExceptIdProduct}

