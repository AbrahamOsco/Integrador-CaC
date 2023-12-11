const shopModel = require('../models/shop/shopModel')
const adminModel = require('../models/admin/adminModel')

const renderAdminPage = async (req, res) => {
	const queryProducts = await shopModel.getProducts();
	res.render('admin/admin',{ 
		products :queryProducts
	})
}

const deleteAProduct = async(req, res) => {
	await adminModel.deleteAProductQuery(req.params.productId)
	res.status(200).json({ message: 'Producto eliminado de la tabla de productos exitosamente' });    
}

const renderCreatePage = async (req, res) => {
	const categorysProducts = await adminModel.getCategorys()
	const licencesProducts = await adminModel.getLicences()
	res.render('pages/admin/create',{
		categorys: categorysProducts,
		licenses: licencesProducts  
	})
}

const addNewProduct = async (req, res) => {
	const dataProducts = {
		aCategory: req.body.aCategory,
		aLicense: req.body.aLicense,
		aNameProduct: req.body.aNameProduct,
		aDescription: req.body.aDescription,
		aSku: req.body.aSku,
		aPrice: req.body.aPrice,
		aStock: req.body.aStock,
		aDiscount: req.body.aDiscount,
		aDues: req.body.aDues,
		aFrontImg: req.body.aFrontImg,
		aBackImg: req.body.aBackImg,
		aCreationTime: req.body.aCreationTime
	};
	console.log(dataProducts)
	await adminModel.addNewProduct(dataProducts)
	res.status(200).json({ message: 'Producto agregado a la tabla de productos exitosamente\n'});    
}


const renderEditPage = async (req, res) => {
	const productId = req.params.productId
	console.log('productId: ', productId)
	res.render('pages/admin/edit', {
			
	})
}

const updateAProduct = async (req, res) => {

}

module.exports = { renderAdminPage, deleteAProduct, renderCreatePage,
	 				addNewProduct, renderEditPage, updateAProduct}

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
