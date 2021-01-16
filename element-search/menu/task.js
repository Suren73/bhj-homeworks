const links = document.querySelectorAll("a.menu__link");
const menu = document.querySelectorAll("ul.menu.menu_sub");
function menu_close() {
	for (let i = 0, count = menu.length; i < count; i++) {
		menu.item(i).className = "menu menu_sub";
	}
}
for (let i = 0, count = links.length; i < count; i++) {

	links.item(i).onclick = function () {
		menu_close();
		let element = links.item(i).closest("li");
		let element_menu = element.querySelector("ul");
		if (element_menu !== null) {
			element_menu.className = "menu menu_sub menu_active"
			return false;
		}
		return;
	}
}
