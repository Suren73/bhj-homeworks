const reveals = document.querySelectorAll('div.reveal');
function isInViewport(element) {
	const viewportHeight = window.innerHeight;
	const elementTop = element.getBoundingClientRect().top;
	const elementBottom = element.getBoundingClientRect().bottom;
	return elementTop < viewportHeight && elementBottom < viewportHeight && elementTop >= 0 ? true : false;
}
window.addEventListener('scroll', () => {
	for (reveal of reveals) {
		isInViewport(reveal) ? reveal.classList.add('reveal_active') : reveal.classList.remove('reveal_active');
		console.log(reveal.classList);
	}
})