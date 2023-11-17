const path = require('node:path')
const { opts } = require('./shop.controller.js')
const { shopModel } = require('../models/shop.model.js')

/*
	Esta ruta (/admin) sería compartida
	Por ahora podes poner tus configuraciones en un archivo aparte
	para evitar interferencias y conflictos	
	por ejemplo en ./admin/adminControllers.js
	Mas adelante veriamos como juntarlos

	TLDR: NO toques mucho este archivo, hace el tuyo
*/

const adminController = {}

/**
 * @type {import('express').RequestHandler}
 */
adminController.renderAdminPage = async (req, res) => {
	const { query } = req
	const filteringWithQuery = Object.keys(req.query).length !== 0

	if (filteringWithQuery) {
		console.log('Query:', query)
		console.log('Filtered products:', await shopModel.getAllProductsFilteredAdmin(query))
	} else {
		console.log('All products:', await shopModel.getAllProducts())
	}

	res.sendFile('./admin/admin.html', opts)
}

/**
 * @type {import('express').RequestHandler}
 */
adminController.deleteProduct = async (req, res) => {
	const deleteId = Number(req.params.id)
	if (Number.isNaN(deleteId)) return res.status(400).send('The id in the request was malformed')

	const deleteStatus = await shopModel.deleteProductById(deleteId)
	if (!deleteStatus) return res.status(404).send(`Product with id '${deleteId}' was not in the database`)

	return res.sendStatus(200)
}

module.exports = { adminController }
