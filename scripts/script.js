'use strict'

function headerNavigationToggle() {
	const headerNavigationClassOpen = 'header__navigation--open'
	const headerNavigation = document.querySelector('.header__navigation')
	const headerNavigationClasses = headerNavigation.classList

	headerNavigationClasses.contains(headerNavigationClassOpen)
		? headerNavigationClasses.remove(headerNavigationClassOpen)
		: headerNavigationClasses.add(headerNavigationClassOpen)
}

function headerNavigationClose() {
	const headerNavigationClassOpen = 'header__navigation--open'
	const headerNavigation = document.querySelector('.header__navigation')

	headerNavigation.classList.remove(headerNavigationClassOpen)
}