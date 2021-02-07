const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const pollAnswer = document.createElement('button');
pollAnswer.classList.add('poll__answer');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		pollTitle.innerHTML = JSON.parse(xhr.responseText).data.title;
		let arrayPollAnswers = JSON.parse(xhr.responseText).data.answers;
		arrayPollAnswers.forEach(element => {
			pollAnswer.innerHTML = element;
			pollAnswers.appendChild(pollAnswer.cloneNode(true));
			pollAnswers.lastElementChild.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
		});
	}
});
