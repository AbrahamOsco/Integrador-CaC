const path = require('node:path')
const shopController = {}

function renderShopPage(req, res){
    res.render('shop/shop', {title: 'Comision 23568'})
}




module.exports = { renderShopPage}
