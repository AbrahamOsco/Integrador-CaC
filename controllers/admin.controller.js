const path = require('node:path')
const { opts } = require('./shop.controller.js')

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

module.exports = { adminController }
