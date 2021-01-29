const interest_active = document.querySelectorAll('ul.interests_active');
interest_active.forEach((value) => {
	const checkbox = value.closest('li.interest').querySelector('input');
	const onChecked = (e) => {
		const interest_check = value.querySelectorAll('input');
		e.target.checked ? interest_check.forEach((element) => element.checked = true) : interest_check.forEach((element) => element.checked = false);
	}

	checkbox.addEventListener('change', onChecked);
})