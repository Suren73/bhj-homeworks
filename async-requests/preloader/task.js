
const loaderClose = document.getElementById('loader');
const items = document.getElementById('items');
const itemCode = document.createElement('div');
itemCode.classList.add('item__code');
const itemValue = document.createElement('div')
itemValue.classList.add('item__value');
const itemCurrency = document.createElement('div');
itemCurrency.classList.add('item__currency');
itemCurrency.textContent = 'руб.';

let xhr = new XMLHttpRequest();
xhr.open('GET', ' https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		loaderClose.classList.remove('loader_active');
		let valute = JSON.parse(xhr.responseText).response.Valute;
		for (let key in valute) {
			const divItem = items.firstElementChild.cloneNode(false);
			itemCode.textContent = valute[key].CharCode;
			itemValue.textContent = valute[key].Value;

			divItem.appendChild(itemCode.cloneNode(true));
			divItem.appendChild(itemValue.cloneNode(true));
			divItem.appendChild(itemCurrency.cloneNode(true));

			items.appendChild(divItem);
		}
	}
});