// @ts-check
const { poolPromise } = require('./mysql/setup.js')

/**
 * This is received in the url from the page
 * @typedef {object} QueryParams
 * @property {string} [busqueda]
 * @property {string} [order]
 * @property {string} [min]
 * @property {string} [max]
 * @property {string | string[]} [filter]
 */

/**
 * This is the object used to filter in sql
 * @typedef {object} SqlFilter
 * @property {string} textSearch
 * @property {string} order
 * @property {string} minPrice
 * @property {string} maxPrice
 */

/**
 * @param {QueryParams} query
 * @returns {SqlFilter}
 */
function parseQuery(query) {
	// query params if not passed might be undefined, if passed with no value, may be ''
	const sqlFilter = {}
	sqlFilter.textSearch = `%${query.busqueda?.trim() ?? ''}%`
	sqlFilter.order = query.order === 'menor_a_mayor' ? 'ASC' : 'DESC'
	sqlFilter.maxPrice = query.max || '9999'
	sqlFilter.minPrice = query.min || '0'
	return sqlFilter
}

const productsModel = {}

productsModel.getAllProducts = async () => {
	const [allProducts] = await poolPromise.execute('SELECT * FROM product')
	return allProducts
}

/**
 * @param {QueryParams} queryParams
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
	return filteredProducts
}

/**
 * @param {QueryParams} queryParams
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
	return filteredProducts
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
