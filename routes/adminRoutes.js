const express = require('express')
// const { adminController } = require('../controllers/admin.controller.js')

const adminRouter = express.Router()

module.exports = {adminRouter}


/*
const express = require('express')
const { adminController } = require('../controllers/admin.controller.js')

const adminRouter = express.Router()

adminRouter.get('/', adminController.renderAdminPage)

adminRouter.delete('/delete/:id', adminController.deleteProduct)

adminRouter.delete('/delete', (_req, res) => {
	res.status(400).send('Tried to delete a product but no id was provided')
})

adminRouter.use((_req, res) => {
	res.status(404).send('Called /admin with wrong HTTP method or path')
})

module.exports = {
	adminRouter,
}
*/