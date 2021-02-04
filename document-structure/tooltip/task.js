const links = document.querySelectorAll('a.has-tooltip');
function linkActiveClose() {
	let divActive = document.querySelector('div.tooltip_active');
	if (divActive !== null) divActive.classList.remove('tooltip_active');
}

links.forEach((link) => {
	const div = document.createElement('div');
	div.classList.add('tooltip');
	div.innerText = link.getAttribute('title');
	div.style.position = 'absolute';

	link.addEventListener('click', (event) => {
		event.preventDefault();
		let left = link.getBoundingClientRect().left + pageXOffset;
		let top = link.getBoundingClientRect().bottom + pageYOffset;
		div.style.left = left + 'px';
		div.style.top = top + 'px';
		link.insertAdjacentElement("afterend", div);

		if (div.classList.contains('tooltip_active')) {
			div.classList.remove('tooltip_active');
		} else {
			linkActiveClose();
			div.classList.add('tooltip_active');
		}
	});
})