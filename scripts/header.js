; (function () {
	'use strict'

	const headerButton = document.querySelector('.header__button')
	const headerLinks = document.querySelectorAll('.header__link')

	headerButton.addEventListener('click', event => {
		event.stopPropagation()
		headerNavigationToggle()
	})

	headerLinks.forEach(element => {
		if (element.nodeName === 'A') {
			element.addEventListener('click', event => {
				event.stopPropagation()
				headerNavigationToggle()
			})
			return
		}

		element.addEventListener('click', event => {
			event.stopPropagation()
		})
	})
})()