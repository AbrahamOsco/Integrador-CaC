// @ts-check
const dataProducts = require('../SQL-Example/mocks/mock_data_ordered.json')

const productsModel = {}

productsModel.getAllProducts = () => {
	return dataProducts
}

/**
 * @param {number} id
 */
productsModel.getProductById = id => {
	return dataProducts.find(p => p.product_id === id)
}

/**
 * @param {number} id
 */
productsModel.deleteProductById = id => {
	const deletedIndex = dataProducts.findIndex(p => p.product_id === id)
	if (deletedIndex === -1) {
		return false
	}

	dataProducts.splice(deletedIndex, 1)
	return true
}

module.exports = { shopModel: productsModel }
