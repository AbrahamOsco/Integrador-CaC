const path = require('node:path')
const { shopModel } = require('../models/shop.model.js')

const basePath = path.join(__dirname, '../public/pages/')
const opts = { root: basePath }

const shopController = {}

// This wont be done with .renderFile() in the future

shopController.renderShopPage = (_req, res) => {
	console.log(shopModel.getAllProducts())
	console.log(shopModel.getProductById(2))
	res.sendFile('./shop/shop.html', opts)
}

shopController.renderCartPage = (_req, res) => {
	res.sendFile('./shop/cart.html', opts)
}

module.exports = { shopController, opts }
