; (function () {
	'use strict'

	const paddingBlock = parseVariable('--padding-block') // refact to get the header padding top directly

	const header = document.querySelector('.header')
	const headerNavigation = document.querySelector('.header__navigation')

	document.addEventListener('scroll', () => {
		const isMoreThanPadding = window.scrollY >= paddingBlock

		const classHeaderFull = 'header--full'
		const hasClassHeaderFull = header.classList.contains(classHeaderFull)

		const classHeaderNavigationFull = 'header__navigation--full'
		// const hasClassHeaderNavigationFull = header.classList.contains(classHeaderNavigationFull)

		if (isMoreThanPadding && !hasClassHeaderFull) {
			header.classList.add(classHeaderFull)
			headerNavigation.classList.add(classHeaderNavigationFull)
			return
		}

		if (!isMoreThanPadding && hasClassHeaderFull) {
			header.classList.remove(classHeaderFull)
			headerNavigation.classList.remove(classHeaderNavigationFull)
		}
	}, { passive: true })

	document.body.addEventListener('click', headerNavigationClose)
})()