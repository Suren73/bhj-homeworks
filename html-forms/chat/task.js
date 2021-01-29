const activeChat = document.querySelector('.chat-widget');
const chat_input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
const robotMessagrs = ["Добрый день!", "Сам дурак", "Сколько время", "Кто тут", "Где Ваша совесть?"];
let len = robotMessagrs.length;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум и минимум включаются
}

const onChange = (e) => {
	const time = new Date().toTimeString().slice(0, 5);
	const message = e.target.value;
	messages.innerHTML += `
	<div class="message message_client">
			<div class="message__time"> ${time} </div>
			<div class="message__text"> ${message} </div>
		</div>
	`;
	chat_input.value = "";
	let index = getRandomInt(0, len);
	messages.innerHTML += `
	<div class="message">
			<div class="message__time"> ${time} </div>
			<div class="message__text"> ${robotMessagrs[index]} </div>
		</div>
	`;
}

activeChat.addEventListener('click', () => {
	activeChat.classList.add('chat-widget_active');
})

chat_input.addEventListener('change', onChange);