const express = require('express')
const shopRouter = express.Router()

const shopController  = require('../controllers/shop.controller.js')

shopRouter.get('/', shopController.renderShopPage)

//shopRouter.get('/cart', shopController.renderCartPage)

//shopRouter.post('/cart', shopController.buyProduct)

shopRouter.use((_req, res) => {
	res.status(404).send('Called /shop with wrong HTTP method or path')
})

module.exports = {
	shopRouter,
}
