// @ts-check
const path = require('node:path')
const { shopModel } = require('../models/shop.model.js')

const basePath = path.join(__dirname, '../public/pages/')
const opts = { root: basePath }

const shopController = {}

// This wont be done with .sendFile() in the future... probably

/**
 * @type {import('express').RequestHandler}
 */
shopController.renderShopPage = async (req, res) => {
	const { query } = req

	if (Object.keys(req.query).length !== 0) {
		console.log('Query:', req.query)
	} else {
		console.log('All products:', await shopModel.getAllProducts())
		console.log('Product by id:', await shopModel.getProductById(2))
	}

	res.sendFile('./shop/shop.html', opts)
}

/**
 * @type {import('express').RequestHandler}
 */
shopController.renderCartPage = async (_req, res) => {
	res.sendFile('./shop/cart.html', opts)
}

/**
 * @type {import('express').RequestHandler}
 */
shopController.buyProduct = async (_req, res) => {
	// Mostrar luego un cartel o algo
	console.log('Productos comprados')
	res.sendFile('./shop/cart.html', opts)
}

module.exports = { shopController, opts }
