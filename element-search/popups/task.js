const modal_main = document.getElementById("modal_main");
const modal_success = document.getElementById("modal_success");
modal_main.classList.add("modal_active");
const modal_close = document.querySelectorAll("div.modal__close");
const show_success = document.querySelector("a.show-success");
function close() {
	modal_main.classList.remove("modal_active");
	modal_success.classList.remove("modal_active");
}
function active() {
	modal_main.classList.remove("modal_active");
	modal_success.classList.add("modal_active");

}
modal_close.forEach((value) => {
	value.onclick = close;
})
show_success.onclick = active;

