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
    res.status(200).json({ message: 'Producto agregado al carrito exitosamente' });    
}

const updateProduct = async (req, res) => {
    const aProductId = req.params.productId
    const newQuantity = req.body.productQuantity
    await shopModel.updateProductInTheCart(aProductId, newQuantity);
    // server luego de recibir un put debe enviar una rspt al cliente sino este se queda colgado y no hace mas fetch
    // y el server nunca mas recibe nada ! .  
    res.status(200).json({ message: 'Actualización exitosa en la tabla cart' });    
}

module.exports = {renderShopPage, renderItemId, renderCartPage, addProduct, updateProduct}


