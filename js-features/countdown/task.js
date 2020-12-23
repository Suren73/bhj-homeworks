
const addTimer = function () {
	const output = document.getElementById("timer");
	if (+output.textContent > 0) {
		output.textContent--;
	} else {
		alert("Вы победили в конкурсе!");
	}
}
setInterval(addTimer, 1000);