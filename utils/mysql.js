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

module.exports = {
	parseQuery,
}
