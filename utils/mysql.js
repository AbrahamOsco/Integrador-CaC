// @ts-check
const { timestampIsNew } = require('./time.js')

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
 * @param {QueryParams | undefined} query
 * @returns {SqlFilter}
 */
function parseQuery(query) {
	// query params if not passed might be undefined, if passed with no value, may be ''
	// || => replace if nullish, zero or empty string
	// ?? => replace only if nullish
	const sqlFilter = {}
	sqlFilter.textSearch = `%${query?.busqueda?.trim() ?? ''}%`
	sqlFilter.order = query?.order === 'menor_a_mayor' ? 'ASC' : 'DESC'
	sqlFilter.maxPrice = query?.max || '999999'
	sqlFilter.minPrice = query?.min || '0'

	return sqlFilter
}

function formatFloat(floatNumber) {
	if (!floatNumber) floatNumber = 0
	return Number.parseFloat(floatNumber.toFixed(2))
}

/**
 * Decimals for some reason are too long when retrieved from the database
 * This function fixes that, leaving only 2 decimals
 */
function parseReceived(products) {
	if (typeof products !== 'object') return
	if (!Array.isArray(products)) {
		products = [products]
	}

	products.forEach(product => {
		product.product_price = formatFloat(product.product_price)
		product.discount = formatFloat(product.discount)
		product.isNew = timestampIsNew(product.create_time)
	})
	return products
}

/**
 * Split elements of array into other arrays of the specified size
 * This will be used by the shop controller
 * @param {object[]} arr
 * @param {number} groupSize
 * @returns {object[][]}
 */
function splitIntoArrays(arr, groupSize) {
	const newArr = []
	for (let i = 0; i < arr.length; i += groupSize) {
		const group = arr.slice(i, i + groupSize)
		newArr.push(group)
	}
	return newArr
}

module.exports = {
	parseQuery,
	parseReceived,
	splitIntoArrays,
}
