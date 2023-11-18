// @ts-check
const path = require('node:path')
const { shopModel } = require('../models/shop.model.js')
const { splitIntoArrays } = require('../utils/mysql.js')

const basePath = path.join(__dirname, '../public/pages/')
const opts = { root: basePath }

const shopController = {}

/**
 * @type {import('express').RequestHandler}
 */
shopController.renderShopPage = async (req, res) => {
	const { query } = req
	const filteringWithQuery = Object.keys(req.query).length !== 0

	let products

	if (filteringWithQuery) {
		console.log('Searching filtered products')
		if (typeof query.filter === 'undefined') query.filter = ['']
		else if (typeof query.filter === 'string') query.filter = [query.filter]
		console.log('Query:', query)
		// console.log('Filtered products:', await shopModel.getAllProductsFiltered(query))
		products = await shopModel.getAllProductsFiltered(query)
	} else {
		// console.log('All products:', await shopModel.getAllProducts())
		// console.log('Product by id:', await shopModel.getProductById(2))
		console.log('Searching all products')
		products = await shopModel.getAllProducts()
	}

	const productsGrid = splitIntoArrays(products, 9)

	res.render('shop/shop.ejs', { productsGrid })
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
