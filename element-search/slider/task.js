const sliders = document.getElementsByClassName("slider__item");
const sliders_arrows = document.querySelectorAll("div.slider__arrow");
let check = 0;
const slider__dots = document.querySelectorAll("div.slider__dot")
slider__dots.item(check).classList.add("slider__dot_active");

sliders_arrows.forEach((value, index) => {
	value.onclick = function () {
		slider_close();
		(index === 0) ? check-- : check++;
		check = (check < 0) ? sliders.length - 1 : check;
		check = (check === sliders.length) ? 0 : check;
		slider_active(check);
	}
})

slider__dots.forEach((value, index) => {
	value.onclick = function () {
		slider_close();
		check = index;
		slider_active(check);
	}
})

function slider_active(check) {
	sliders.item(check).classList.add("slider__item_active");
	slider__dots.item(check).classList.add("slider__dot_active");
}

function slider_close() {
	check = Array.from(sliders).findIndex((element) => {
		return element.classList.contains("slider__item_active");
	})
	sliders.item(check).classList.remove("slider__item_active");
	slider__dots.item(check).classList.remove("slider__dot_active");

}