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

adminController.renderAdminPage = (_req, res) => {
	res.sendFile('./admin/admin.html', opts)
}

adminController.deleteProduct = (req, res) => {
	const deleteId = Number(req.params.id)
	if (Number.isNaN(deleteId)) return res.sendStatus(400)

	const deleteStatus = shopModel.deleteProductById(deleteId)
	if (!deleteStatus) return res.sendStatus(404)

	return res.sendStatus(200)
}

module.exports = { adminController }
