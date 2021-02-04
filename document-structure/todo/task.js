const form = document.getElementById('tasks__form');
const inputText = document.getElementById("task__input");
const tasksList = document.getElementById('tasks__list');

const element = document.createElement('div');
element.classList.add('task');
element.appendChild(document.createElement('div'));
element.appendChild(document.createElement('a'));
element.firstElementChild.classList.add('task__title');
element.lastElementChild.setAttribute('href', '#');
element.lastElementChild.classList.add("task__remove");
element.lastElementChild.innerHTML = '&times;';

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const text = inputText.value;

	if (text !== "") {
		const div = element.cloneNode(true);
		tasksList.appendChild(div);
		div.firstElementChild.innerHTML = text;
		form.reset();
		div.lastElementChild.addEventListener('click', (event) => {
			event.preventDefault();
			tasksList.removeChild(div);
		});
	} else {
		alert('Пустая строка');
	}

});