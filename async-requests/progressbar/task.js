const progress = document.getElementById('progress');
const file = document.getElementById('form');
function loadProcess(a, len) {
	let one = (a / len).toFixed(1);
	progress.value = one;
}
file.addEventListener('submit', (e) => {
	e.preventDefault();

	let formData = new FormData(file);
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

	xhr.upload.addEventListener('progress', (event) => {
		loadProcess(event.loaded, event.total);
	});

	xhr.send(formData);

})

