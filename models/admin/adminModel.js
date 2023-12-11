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


const deleteAProductQuery = async (productId) => {
  return new Promise( (resuelta, rechazada) => {
    const aQuery = 'DELETE FROM product p WHERE p.product_id = ?;'
    db.connection.query(aQuery, [productId], function(error, results, fields){
      if (error) {
        console.error('Error al ejecutar la consulta -> deleteAProductQuery:\n');
        throw error;
      }
      resuelta(results);  // Asigno el results a resuelta. 
    } )
  });  
}


const getCategoryId = async (aDataProduct) => {
  return new Promise( (resuelta, rechazada) => {
    const aQuery = 'SELECT category_id AS categoryId FROM category WHERE category_name = ?; ;' 
    db.connection.query(aQuery, aDataProduct['aCategory'],  function(error, results, fields){
      if (error) {
        console.error('Error al ejecutar la consulta -> addNewProduct:\n');
        throw error;
      }
      resuelta(JSON.parse(JSON.stringify(results))[0]['categoryId']);
    } )
  });  
}

const getLicenseId = async (aDataProduct) => {
  return new Promise( (resuelta, rechazada) => {
    const aQuery = 'SELECT licence_id AS licenseId FROM licence WHERE licence_name = ?;' 
    db.connection.query(aQuery, aDataProduct['aLicense'],  function(error, results, fields){
      if (error) {
        console.error('Error al ejecutar la consulta -> addNewProduct:\n');
        throw error;
      }
      resuelta(JSON.parse(JSON.stringify(results))[0]['licenseId']);
    } )
  });  
}

const addNewProduct = async (aDataProduct) => {
  return new Promise( async (resuelta, rechazada) => {
    const aCategoryId = await getCategoryId(aDataProduct)
    const aLicenseId = await getLicenseId(aDataProduct)
    console.log('aCategoryId', aCategoryId, 'aLicenseId', aLicenseId)
    const aQuery = 'INSERT INTO product (product_name, product_description, price, stock,' +
      'discount, sku, dues, image_front, image_back, create_time, licence_id, category_id) ' +
      'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ) ' 
    db.connection.query(aQuery, [aDataProduct['aNameProduct'], aDataProduct['aDescription'],
      aDataProduct['aPrice'], aDataProduct['aStock'], aDataProduct['aDiscount'], aDataProduct['aSku'],
      aDataProduct['aDues'], aDataProduct['aFrontImg'], aDataProduct['aBackImg'], aDataProduct['aCreationTime'],
      aLicenseId, aCategoryId] ,  function(error, results, fields){
      if (error) {
        console.error('Error al ejecutar la consulta -> addNewProduct:\n');
        throw error;
      }
      resuelta(results);
    } )
  });  
}

const getCategorys = async () => {
  return new Promise( (resuelta, rechazada) => {
    const aQuery = 'SELECT category_name as CategoryName from category c GROUP BY category_name;'
    db.connection.query(aQuery, function(error, results, fields){
      if (error) {
        console.error('Error al ejecutar la consulta -> getProducts:\n');
        throw error;
      }
      resuelta(results);  // Asigno el results a resuelta. 
    } )
  });  
}

const getLicences = async () => {
  return new Promise( (resuelta, rechazada) => {
    const aQuery = 'SELECT licence_name as LicenseName FROM product p INNER JOIN licence l ON p.licence_id = l.licence_id GROUP BY licence_name;'
    db.connection.query(aQuery, function(error, results, fields){
      if (error) {
        console.error('Error al ejecutar la consulta -> getProducts:\n');
        throw error;
      }
      resuelta(results);  // Asigno el results a resuelta. 
    } )
  });  
}


module.exports = {deleteAProductQuery, addNewProduct, getCategorys, getLicences}