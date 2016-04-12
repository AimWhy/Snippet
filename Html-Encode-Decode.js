function encode(string) {
	var textarea;
	textarea = document.createElement('textarea');
	textarea.textContent = string;
	return textarea.innerHTML;
};

function decode(string) {
	var textarea;
	textarea = document.createElement('textarea');
	textarea.innerHTML = string;
	return textarea.textContent;
};
