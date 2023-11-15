const express = require('express')
const { adminController } = require('../controllers/admin.controller.js')

// /admin
const adminRouter = express.Router()

adminRouter.get('/', adminController.renderAdminPage)

module.exports = {
	adminRouter,
}
