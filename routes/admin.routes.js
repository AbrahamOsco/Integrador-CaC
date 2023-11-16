const express = require('express')
const { adminController } = require('../controllers/admin.controller.js')

/*
	router: /admin
*/

const adminRouter = express.Router()

adminRouter.get('/', adminController.renderAdminPage)

adminRouter.delete('/delete/:id', adminController.deleteProduct)

module.exports = {
	adminRouter,
}
