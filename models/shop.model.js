const dataProducts = require('../SQL-Example/mocks/mock_data_ordered.json')

const shopModel = {}

shopModel.getAllProducts = () => {
	return dataProducts
}

shopModel.getProductById = id => {
	return dataProducts.find(p => p.product_id === id)
}

module.exports = { shopModel }
