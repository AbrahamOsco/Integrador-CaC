// @ts-check
const { poolPromise } = require('./mysql/setup.js')

const productsModel = {}

productsModel.getAllProducts = async () => {
	const [allProducts] = await poolPromise.execute('SELECT * FROM product')
	return allProducts
}

/**
 * @param {number} id
 */
productsModel.getProductById = async id => {
	const [productsById] = await poolPromise.execute(
		`
		SELECT *
		FROM product
		WHERE id = ?
		`,
		[id],
	)
	return productsById[0] ?? false
}

/**
 * @param {number} id
 */
productsModel.deleteProductById = async id => {
	/** @type {[import('mysql2').ResultSetHeader, unknown]} */
	const [results] = await poolPromise.execute(
		`
		DELETE FROM product
		WHERE id = ?
		`,
		[id],
	)

	if (!results.affectedRows) {
		// deleted nothing
		return false
	}
	return true
}

module.exports = { shopModel: productsModel }
