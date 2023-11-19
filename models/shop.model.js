// @ts-check
const { poolPromise } = require('./mysql/setup.js')
const { parseQuery, parseReceived } = require('../utils/mysql.js')

const productsModel = {}

productsModel.getAllProducts = async () => {
	const [allProducts] = await poolPromise.execute('SELECT * FROM product')
	return parseReceived(allProducts)
}

/**
 * @param {object} queryParams
 */
productsModel.getAllProductsFiltered = async queryParams => {
	const sqlFilter = parseQuery(queryParams)

	const [filteredProducts] = await poolPromise.execute(
		`
		SELECT * FROM product
		WHERE
			(
				product_name LIKE ?
				OR licence_name LIKE ?
			)
			AND product_price > ?
			AND product_price < ?
		ORDER BY product_price ${sqlFilter.order}
		`,
		[sqlFilter.textSearch, sqlFilter.textSearch, sqlFilter.minPrice, sqlFilter.maxPrice],
	)
	return parseReceived(filteredProducts)
}

/**
 * @param {object} queryParams
 */
productsModel.getAllProductsFilteredAdmin = async queryParams => {
	const sqlFilter = parseQuery(queryParams)

	const [filteredProducts] = await poolPromise.execute(
		`
		SELECT * FROM product
		WHERE
			product_sku LIKE ?
			OR product_name LIKE ?
			OR licence_name LIKE ?
		ORDER BY id ASC
		`,
		[sqlFilter.textSearch, sqlFilter.textSearch, sqlFilter.textSearch],
	)
	return parseReceived(filteredProducts)
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
	return parseReceived(productsById[0]) ?? false
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
