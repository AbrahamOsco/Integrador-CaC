const mainModel = require('../models/main/mainModel') 

const path = require('path');

const db = require('../models/mysql/connectionDB')

function getHome(req, res){
  db.connection.query('SELECT * FROM licence', function (error, results, fields) {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      throw error;
    }
    console.log('Resultados de la consulta:', results);
    // Procesa los resultados aquí        
    res.render('index', {title: 'Comision 23568', licences:results})  
  });
  
}

module.exports = {
    getHome
}

