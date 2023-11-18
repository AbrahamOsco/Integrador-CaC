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
		updatePrice(productCard)
	})

	buttonMinus?.addEventListener('click', () => {
		inputElement.value = operationStringNumber(inputElement.value, -1)
		updatePrice(productCard)
	})

	inputElement.addEventListener('input', () => {
		updatePrice(productCard)
	})
})

const productCards = document.querySelectorAll('.product-card')

/**
 * Update total price of a product card
 * It uses its price and the quantity
 * @param {Element} productCard
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
}

/**
 * Iterate through all products to update all prices
 */
function updatePrices() {
	productCards?.forEach(productCard => {
		updatePrice(productCard)
	})
}

updatePrices()
