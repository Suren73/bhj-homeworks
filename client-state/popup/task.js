const getCookie = (name) => {
	const value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	if (parts.length === 2) {
		return parts
			.pop()
			.split(";")
			.shift();
	}
}
const subscribeModal = document.getElementById('subscribe-modal');
if (!getCookie('modal')) subscribeModal.classList.add('modal_active');

const modalClose = document.querySelector('div.modal__close');

modalClose.addEventListener('click', () => {
	subscribeModal.classList.remove('modal_active');
	document.cookie = "modal=close";
});

