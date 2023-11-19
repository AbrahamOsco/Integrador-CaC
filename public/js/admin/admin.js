// @ts-check

/** @type {NodeListOf<HTMLButtonElement>} */
const buttonsDelete = document.querySelectorAll('tbody td button')

buttonsDelete.forEach(button => {
	button.addEventListener('click', async e => {
		const id = button.dataset.id ?? ''

		const confirmDelete = confirm(`En verdad quieres borrar el item del id '${id}' ?`)
		if (!confirmDelete) return

		const response = await fetch(`/admin/delete/${id}`, {
			method: 'DELETE',
		})
		if (response.ok) {
			window.location.reload()
		} else {
			const errorMessage = await response.text()
			console.error(errorMessage)
			alert(errorMessage)
		}
	})
})
