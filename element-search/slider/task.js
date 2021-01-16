const sliders = document.getElementsByClassName("slider__item");
const sliders_arrows = document.querySelectorAll("div.slider__arrow");
let check = 0;
const slider__dots = document.querySelectorAll("div.slider__dot")
slider__dots.item(check).className = "slider__dot slider__dot_active";

for (let i = 0, count = sliders_arrows.length; i < count; i++) {
	sliders_arrows.item(i).onclick = function () {
		slider_close();
		if (i === 0) {
			check -= 1;
			if (check < 0) {
				check = sliders.length - 1;
			}
		} else {
			check += 1;
			if (check === sliders.length) {
				check = 0;
			}
		}
		slider_active(check);
	}
}

for (let i = 0, count = slider__dots.length; i < count; i++) {
	slider__dots.item(i).onclick = function () {
		slider_close();
		check = i;
		slider_active(check);
	}
}

function slider_active(check) {
	sliders.item(check).className = "slider__item slider__item_active";
	slider__dots.item(check).className = "slider__dot slider__dot_active";
}
function slider_close() {
	for (let i = 0, count = sliders.length; i < count; i++) {
		sliders.item(i).className = "slider__item";
		slider__dots.item(i).className = "slider__dot";
	}
}