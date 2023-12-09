const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const deleteXBtn = document.querySelector('#deleteX');
const quantity = document.querySelector('#quantityInput') 

const handlerPlusBtn = () => {
	console.log('Handler handlerPlusBtn\n');	
}

const handlerMinusBtn = () => {
	console.log('Handler handlerMinusBtn\n');	

}

const handlerDeleteXBtn = () => {
	console.log('handlerDeleteXBtn')
}


// Validar la cantidad en el evento "change"
quantity.addEventListener('change', () => {
	validateQuantity();
  });
  
  // Función para validar y asegurarse de que la cantidad no sea menor a 0
  function validateQuantity() {
	let cantidad = parseInt(quantity.value);
	if (isNaN(cantidad) || cantidad < 0) {
	  quantity.value = 0;
	}
  }

plusBtn.addEventListener('click', handlerPlusBtn)

minusBtn.addEventListener('click', handlerMinusBtn)

deleteXBtn.addEventListener('click', handlerDeleteXBtn)


/*
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


function updatePrice(productCard) {
	const productPriceElement = productCard.querySelector('.product-card__details .price')
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
*/
