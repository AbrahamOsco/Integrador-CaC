const shopModel = require('../models/shop/shopModel')

const renderShopPage = async (req, res) =>{
    const queryProducts = await shopModel.getProducts();
    res.render('shop/shop', 
    { products: queryProducts,
    
    })
}


const renderItemId = async (req, res) => {
    const productId = req.params.productId
    const queryInfoProduct = await shopModel.getInfoProduct(productId);
    const a3Products = await shopModel.get3ProductsExceptIdProduct(productId)
    console.log(a3Products)

    console.log(req.params.productId)
    res.render('pages/shop/item',
    {infoProduct:queryInfoProduct[0],
     products:a3Products})  // Ojo cuando entras a carpetas es sin la "/" al inicio . 
}


module.exports = {renderShopPage, renderItemId}


