const editor = document.getElementById('editor');
editor.addEventListener('input', () => localStorage.text = editor.value);
window.addEventListener('load', () => {
	localStorage.text === undefined ? editor.value = "" : editor.value = localStorage.text;

});

