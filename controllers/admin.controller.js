const path = require('node:path')
const { opts } = require('./admin.controller.js')

const adminController = {}

adminController.renderAdminPage = (_req, res) => {
	res.sendFile('./admin/admin.html', opts)
}

module.exports = { adminController }
