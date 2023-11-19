// @ts-check

/**
 * Receives a number as string, converts it,
 * makes an operation, converts it again, and returns it
 * @param {string} numString
 * @param {number} value
 * @returns {string}
 */
function operationStringNumber(numString, value) {
	let myNum = Number(numString)
	if (Number.isNaN(myNum)) myNum = 0
	let updatedNum = myNum + value
	if (updatedNum < 0) updatedNum = 0
	return updatedNum.toString()
}

const inputArray = document.querySelectorAll('.product-card__quantity')

inputArray.forEach(inputGroup => {
	const inputElement = inputGroup.querySelector('input')
	const buttonPlus = inputGroup.querySelector('.plus')
	const buttonMinus = inputGroup.querySelector('.minus')
	const productCard = inputGroup.closest('.product-card')

	if (!inputElement || !productCard) return

	buttonPlus?.addEventListener('click', () => {
		inputElement.value = operationStringNumber(inputElement.value, 1)
		updateResume()
	})

	buttonMinus?.addEventListener('click', () => {
		inputElement.value = operationStringNumber(inputElement.value, -1)
		updateResume()
	})

	inputElement.addEventListener('input', () => {
		updateResume()
	})
})

const productCards = document.querySelectorAll('.product-card')

/**
 * Update total price of a product card
 * It uses its price and the quantity
 * @param {Element} productCard
 * @returns {{totalPrice:number, quantity:number}}
 */
function updatePrice(productCard) {
	const productPriceElement = productCard.querySelector('.product-card__details .price')
	/** @type {HTMLInputElement | null} */
	const quantityElement = productCard.querySelector('.product-card__quantity input')
	const totalPriceElement = productCard.querySelector('.product-card__price p')

	const productPrice = Number(productPriceElement?.textContent) || 0
	const quantity = Number(quantityElement?.value) || 0

	const totalPrice = productPrice * quantity

	if (totalPriceElement) {
		totalPriceElement.textContent = totalPrice.toFixed(2)
	}
	return { totalPrice, quantity }
}

/**
 * Iterate through all products to update all prices
 */
function updatePrices() {
	productCards?.forEach(productCard => {
		updatePrice(productCard)
	})
}

const resumeChart = {
	element: document.querySelector('.resume__chart'),
	quantity: document?.querySelector('.resume__chart .quantity .number'),
	subtotal: document?.querySelector('.resume__chart .subtotal .number'),
	shipping: document?.querySelector('.resume__chart .shipping .number'),
	total: document?.querySelector('.resume__chart .total .number'),
}

function updateResume() {
	let quantity = 0
	let subtotal = 0
	let shipping = 0
	let total = 0

	productCards?.forEach(productCard => {
		const { totalPrice: cardPrice, quantity: cardQuantity } = updatePrice(productCard)
		quantity += cardQuantity
		subtotal += cardPrice * cardQuantity
	})

	total = subtotal + shipping

	if (resumeChart.quantity && resumeChart.subtotal && resumeChart.shipping && resumeChart.total) {
		resumeChart.quantity.textContent = quantity.toString()
		resumeChart.subtotal.textContent = subtotal.toFixed(2)
		resumeChart.shipping.textContent = shipping.toFixed(2)
		resumeChart.total.textContent = total.toFixed(2)
	}
}

// updatePrices()
updateResume()
