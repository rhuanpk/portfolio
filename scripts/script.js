'use strict'

function getFontSize(element) {
	return window.getComputedStyle(element || document.body).fontSize
}

function parseVariable(variable, element) {
	element = element || document.body
	const paddingBlock = window.getComputedStyle(element).getPropertyValue(variable)

	return parseInt(getFontSize(element), 10) * parseFloat(paddingBlock, 10)
}

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