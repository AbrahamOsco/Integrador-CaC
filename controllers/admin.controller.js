/*
	Esta ruta (/admin) sería compartida
	Por ahora podes poner tus configuraciones en un archivo aparte
	para evitar interferencias y conflictos	
	por ejemplo en ./admin/adminControllers.js
	Mas adelante veriamos como juntarlos

	TLDR: NO toques mucho este archivo, hace el tuyo
const adminController = {}

adminController.renderAdminPage = async (req, res) => {
	const { query } = req
	const filteringWithQuery = Object.keys(req.query).length !== 0

	let products

	if (filteringWithQuery) {
		console.log('Searching filtered products')
		console.log('Query:', query)
		// console.log('Filtered products:', await shopModel.getAllProductsFilteredAdmin(query))
		products = await shopModel.getAllProductsFilteredAdmin(query)
	} else {
		// console.log('All products:', await shopModel.getAllProducts())
		console.log('Searching all products')
		products = await shopModel.getAllProducts()
	}

	res.render('admin/admin.ejs', { products, query })
}

adminController.deleteProduct = async (req, res) => {
	const deleteId = Number(req.params.id)
	if (Number.isNaN(deleteId)) {
		res.status(400).send('The id in the request was malformed')
		return
	}

	const deleteStatus = await shopModel.deleteProductById(deleteId)
	if (!deleteStatus) {
		res.status(404).send(`Product with id '${deleteId}' was not in the database`)
		return
	}

	res.sendStatus(200)
}

module.exports = { adminController }
*/