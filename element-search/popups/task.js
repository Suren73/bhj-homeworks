const modal_main = document.getElementById("modal_main");
const modal_success = document.getElementById("modal_success");
modal_main.className = "modal modal_active";
const modal__close = document.querySelectorAll("div.modal__close");
const show_success = document.querySelector("a.show-success");
function close() {
	modal_main.className = "modal";
	modal_success.className = "modal";
}
function active() {
	modal_success.className = "modal modal_active";
}
for (let i = 0, count = modal__close.length; i < count; i++) {
	modal__close[i].onclick = close;
}
show_success.onclick = active;

