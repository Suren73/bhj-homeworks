const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const span = document.getElementById('user_id');
const signinForm = document.getElementById('signin__form');
window.addEventListener('load', () => {
	if (localStorage.user_id) {
		welcomeActive();
	} else {
		signin.classList.add('signin_active');
		signinForm.addEventListener('submit', (e) => {
			e.preventDefault();

			let formData = new FormData(signinForm);
			const xhr = new XMLHttpRequest();
			xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
			xhr.addEventListener('readystatechange', () => {
				if (xhr.readyState === xhr.DONE) {
					if (!JSON.parse(xhr.responseText).success) {
						alert('Неверный логин/пароль');
					} else {
						localStorage.user_id = JSON.parse(xhr.responseText).user_id;
						welcomeActive();
					}
					signinForm.reset();
				}
			});
			xhr.send(formData);

		})
	}
});
const welcomeActive = () => {
	span.innerHTML = localStorage.user_id;
	signin.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
}



