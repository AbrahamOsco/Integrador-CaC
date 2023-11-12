const path = require('node:path')

const basePath = path.join(__dirname, '../public/pages/')
const opts = { root: basePath }

const shopController = {}

// This wont be done with .renderFile() in the future

shopController.renderShopPage = (_req, res) => {
	res.sendFile('./shop/shop.html', opts)
}

shopController.renderCartPage = (_req, res) => {
	res.sendFile('./shop/cart.html', opts)
}

module.exports = { shopController }
