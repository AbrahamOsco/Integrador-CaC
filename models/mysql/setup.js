// @ts-check
const mysql2 = require('mysql2')

const pool = mysql2.createPool({
	host: process.env.HOST ?? 'localhost',
	user: process.env.USER ?? 'root',
	database: process.env.DATABASE ?? 'CodoACodo',
})

const poolPromise = pool.promise()

module.exports = {
	pool,
	poolPromise,
}
