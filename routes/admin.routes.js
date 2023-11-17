// @ts-check
const express = require('express')
const { adminController } = require('../controllers/admin.controller.js')

/*
	router: /admin
*/

const adminRouter = express.Router()

adminRouter.get('/', adminController.renderAdminPage)

adminRouter.delete('/delete/:id', adminController.deleteProduct)

adminRouter.use((_req, res) => {
	res.status(404).send('Called /admin with wrong HTTP method or path')
})

module.exports = {
	adminRouter,
}
