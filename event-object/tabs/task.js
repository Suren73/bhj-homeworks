const tabs = document.querySelectorAll('div.tab');
console.log(tabs);
const tab_contents = document.querySelectorAll('div.tab__content');
console.log(tab_contents);
function deactivate() {
	tabs.forEach((value, index) => {
		value.className = "tab";
		tab_contents.item(index).className = "tab__content";
	})
}
tabs.forEach((value, index) => {
	value.addEventListener('click', () => {
		deactivate();
		value.className = "tab tab_active";
		tab_contents.item(index).className = "tab__content tab__content_active";
	})
})