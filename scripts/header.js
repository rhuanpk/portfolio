; (function () {
	'use strict'

	const headerButton = document.querySelector('.header__button')
	const headerNavigation = document.querySelector('.header__navigation')

	headerButton.addEventListener('click', event => {
		event.stopPropagation()
		headerNavigationToggle()
	})

	headerNavigation.addEventListener('click', event => {
		event.stopPropagation()
		headerNavigationToggle()
	})
})()