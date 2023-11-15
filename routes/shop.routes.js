const express = require('express')
const { shopController } = require('../controllers/shop.controller.js')

// /shop
const shopRouter = express.Router()

shopRouter.get('/', shopController.renderShopPage)

shopRouter.get('/cart', shopController.renderCartPage)

module.exports = {
	shopRouter,
}
