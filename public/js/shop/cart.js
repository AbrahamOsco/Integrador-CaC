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
	if (!inputElement) return

	buttonPlus?.addEventListener('click', () => {
		inputElement.value = operationStringNumber(inputElement.value, 1)
		updatePrices()
	})

	buttonMinus?.addEventListener('click', () => {
		inputElement.value = operationStringNumber(inputElement.value, -1)
		updatePrices()
	})

	inputElement.addEventListener('input', () => {
		updatePrices()
	})
})

const productCards = document.querySelectorAll('.product-card')

// get the number, convert it and multiply
function updatePrices() {
	productCards?.forEach(productCard => {
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
	})
}

updatePrices()
