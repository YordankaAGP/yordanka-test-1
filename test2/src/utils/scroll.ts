export const blockScroll = (isBlocked: boolean) => {
	const html = document.documentElement
	const { body } = document

	if (isBlocked) {
		const scrollBarWidth = window.innerWidth - html.clientWidth
		const bodyPaddingRight =
			parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0

		html.style.position = 'relative'
		html.style.overflow = 'hidden'
		body.style.position = 'relative'
		body.style.overflow = 'hidden'
		body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`
	} else {
		html.style.position = ''
		html.style.overflow = ''
		body.style.position = ''
		body.style.overflow = ''
		body.style.paddingRight = ''
	}
}
