let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {

	function getHole(index) {
		return document.getElementById(`hole${index}`);
	}
	let hole = getHole(index);
	hole.onclick = function () {
		if (hole.className.includes("hole_has-mole")) {
			dead.textContent++;
			if (dead.textContent == 10) {
				alert("Вы победили!");
				dead.textContent = 0;
				lost.textContent = 0;
			}
		} else {
			lost.textContent++;
			if (lost.textContent == 5) {
				alert("Вы проиграли");
				dead.textContent = 0;
				lost.textContent = 0;
			}
		}
	}
}