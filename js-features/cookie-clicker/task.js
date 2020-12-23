const image = document.getElementById("cookie");
const output = document.getElementById("clicker__counter");

function changeSizes() {
	output.textContent++;
	if (+output.textContent % 2) {
		image.width = 100;
		image.height = 100;
	} else {
		image.width = 200;
		image.height = 200;
	}
}
image.onclick = changeSizes;
