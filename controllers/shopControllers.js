const model = require('../models/shop/shopModel')


const renderShopPage = async (req, res) =>{
    const queryProducts = await model.getProducts();
    res.render('shop/shop', 
    { products: queryProducts,
    
    })
}




module.exports = { renderShopPage}
