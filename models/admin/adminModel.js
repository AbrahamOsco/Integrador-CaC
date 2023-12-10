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