
const dropdown = document.querySelectorAll('div.dropdown__value');
let dropdown_new;
let list;
const links = document.querySelectorAll('a.dropdown__link');
let check = 0;

dropdown.forEach(function (value) {
	value.addEventListener('click', () => {
		list = value.closest('div.dropdown').querySelector('ul.dropdown__list');
		dropdown_new = value;
		check++;

		if (check % 2 !== 0) {
			list.className = "dropdown__list dropdown__list_active";
		} else {
			list.className = "dropdown__list";
			check = 0;
		}
	})
})

links.forEach(function (value) {
	value.addEventListener('click', (event) => {
		event.preventDefault();
		dropdown_new.textContent = value.textContent;
		list.className = "dropdown__list";
		check = 0;
	})
})

