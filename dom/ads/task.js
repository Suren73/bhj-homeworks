const rotators = document.querySelectorAll('span.rotator');

function start() {
	rotators.forEach((value) => {
		const element = Array.from(value.children);
		let len = element.length;
		let index = element.findIndex((element) => element.classList.contains('rotator__case_active'));
		element[index].classList.remove('rotator__case_active');
		index++;
		index = (index < len) ? index : 0;
		element[index].classList.add('rotator__case_active');
	});
}

setInterval(start, 1000);