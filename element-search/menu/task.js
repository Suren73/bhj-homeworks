const links = document.querySelectorAll("a.menu__link");
const menu = document.querySelectorAll("ul.menu.menu_sub");
function menu_close() {
	menu.forEach((value) => {
		value.classList.remove("menu_active");
	})
}

links.forEach((value) => {
	value.onclick = function () {
		let element = value.closest("li");
		let element_menu = element.querySelector("ul");

		if (element_menu !== null) {
			if (element_menu.classList.contains("menu_active")) {
				element_menu.classList.remove("menu_active");
			} else {
				menu_close();
				element_menu.classList.add("menu_active");
			}
			return false
		}
	}
}) 