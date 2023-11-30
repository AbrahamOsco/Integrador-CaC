// @ts-check
const path = require('node:path')
const { shopModel } = require('../models/shop.model.js')
const { splitIntoArrays } = require('../utils/mysql.js')

const basePath = path.join(__dirname, '../public/pages/')
const opts = { root: basePath }

const shopController = {}

function basicQueryParsing(query) {
	if (typeof query.filter === 'undefined') query.filter = ['']
	else if (typeof query.filter === 'string') query.filter = [query.filter]

	if (Number(query.max) < Number(query.min)) {
		query.max = (Number(query.min) + 1).toString()
	}
	return query
}

/**
 * @type {import('express').RequestHandler}
 */
shopController.renderShopPage = async (req, res) => {
	let { query } = req

	let products

	query = basicQueryParsing(query)
	products = await shopModel.getAllProductsFiltered(query)
	console.log('Query:', query)
	console.log('Products:', products)

	const productsGrid = splitIntoArrays(products, 9)

	res.render('shop/shop.ejs', { productsGrid, query })
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
