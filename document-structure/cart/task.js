const productAdd = document.querySelectorAll('div.product__add');
const cartProducts = document.querySelector('div.cart__products');
const cartProduct = document.createElement('div');
cartProduct.classList.add('cart__product');
cartProduct.appendChild(document.createElement('img'));
cartProduct.appendChild(document.createElement('div'));
cartProduct.firstElementChild.classList.add('cart__product-image');
cartProduct.lastElementChild.classList.add('cart__product-count');
const productControlDec = document.querySelectorAll('div.product__quantity-control_dec');
const productControlIns = document.querySelectorAll('div.product__quantity-control_inc');
const productsInCart = cartProducts.children;
let i;

productControlIns.forEach((value) => {

	value.addEventListener('click', () => {
		i = value.previousElementSibling.textContent;
		i++;
		value.previousElementSibling.textContent = i;
	});

})

productControlDec.forEach((value) => {

	value.addEventListener('click', () => {
		i = value.nextElementSibling.textContent;
		if (i != 1) {
			i--;
			value.nextElementSibling.textContent = i;
		}
	});
})

productAdd.forEach((value) => {

	value.addEventListener('click', () => {

		const image = value.closest('div.product__controls').previousElementSibling.getAttribute('src');
		const productValue = +value.previousElementSibling.firstElementChild.nextElementSibling.textContent;
		const dataId = value.closest('div.product').dataset.id;

		for (let index = 0, count = productsInCart.length; index < count; index++) {
			if (dataId == productsInCart.item(index).dataset.id) {
				let num = +productsInCart.item(index).children[1].textContent;
				num += productValue;
				productsInCart.item(index).children[1].textContent = num;
				return;
			}
		}

		cartProduct.dataset.id = dataId;
		cartProduct.firstElementChild.setAttribute('src', image);
		cartProduct.lastElementChild.textContent = productValue;
		const div = cartProduct.cloneNode(true);

		cartProducts.appendChild(div);


	});

})


