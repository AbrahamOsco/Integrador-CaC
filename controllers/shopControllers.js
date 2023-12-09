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
    res.render('pages/shop/item',
    {infoProduct:queryInfoProduct[0],
     products:a3Products})  // Ojo cuando entras a carpetas es sin la "/" al inicio . 
}


const renderCartPage = async (req, res) => {
    const productsInCart = await shopModel.getProductsInCart()
    const finalTotalPrice = await shopModel.getFinalTotalPrice()
    const totalQuantityProds = await shopModel.getTotalQuantityProds() 
    console.log("finalTotalPrice", finalTotalPrice)
    console.log(productsInCart.length)
    res.render('pages/shop/cart', {
        productsCart: productsInCart,
        finalTotalPrice: finalTotalPrice,
        totalQuantity : totalQuantityProds,
    })

}

const addProduct = async (req, res) => {
    const aProductId = req.params.productId
    const quantity = req.body.productQuantity
    console.log("aProductId", aProductId)
    console.log("Recibimos cantidad: ", quantity)
    shopModel.addProductToTheCart(aProductId, quantity)    
}


module.exports = {renderShopPage, renderItemId, renderCartPage, addProduct}


