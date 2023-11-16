const dataProducts = require('../SQL-Example/mocks/mock_data_ordered.json')

const shopModel = {}

shopModel.getAllProducts = () => {
	return dataProducts
}

shopModel.getProductById = id => {
	return dataProducts.find(p => p.product_id === id)
}

shopModel.deleteProductById = id => {
	const deletedIndex = dataProducts.findIndex(p => p.product_id === id)
	if (deletedIndex === -1) {
		return false
	}

	dataProducts.splice(deletedIndex, 1)
	return true
}

module.exports = { shopModel }
