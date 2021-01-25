const links = document.querySelectorAll('a.font-size');
let book = document.getElementById('book');

function activeClose() {
	let index = Array.from(links).findIndex((element) => {
		return element.classList.contains("font-size_active");
	})
	links.item(index).classList.remove("font-size_active");
	book.classList.remove('book_fs-big');
	book.classList.remove('book_fs-small');
}

links.forEach(function (value) {
	value.addEventListener('click', (event) => {
		event.preventDefault();
		activeClose();
		value.classList.add('font-size_active');
		let attr = value.getAttribute('data-size');
		if (attr === 'small') {
			book.classList.add('book_fs-small');
		} else if (attr === 'big') {
			book.classList.add('book_fs-big');
		}
	})
})