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
	})

	buttonMinus?.addEventListener('click', () => {
		inputElement.value = operationStringNumber(inputElement.value, -1)
	})
})
