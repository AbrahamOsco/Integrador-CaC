// @ts-check
const products = require('../../SQL-Example/mocks/mock_data_ordered.json')
const { poolPromise } = require('./setup.js')

/*
	This script is meant to be run manually and one time
*/

async function populateSql() {
	for (const product of products) {
		await poolPromise.execute(
			`
			INSERT INTO product
			(
				licence_name,
				category_name,
				product_name,
				product_description,
				product_price,
				dues,
				product_sku,
				img_front,
				img_back,
				discount,
				stock,
				create_time
			)
			VALUES
				(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			`,
			[
				product.licence_name,
				product.category_name,
				product.product_name,
				product.product_description,
				product.product_price,
				product.dues,
				product.product_sku,
				product.img_front,
				product.img_back,
				product.discount,
				product.stock,
				new Date(product.create_time),
			],
		)
	}

	poolPromise.end()
}

populateSql()
