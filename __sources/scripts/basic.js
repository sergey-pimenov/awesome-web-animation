window.addEventListener('load', function() {
	// Set header width
	var header = document.getElementsByTagName('header')[0];
	var main = document.getElementsByTagName('main')[0];
	window.addEventListener('resize', setHeaderSize);
	function setHeaderSize() {
		setTimeout(function() {
			header.style.width = main.style.width;
		}, 100)
	}
	setHeaderSize();

	// Screen that hide init draw
	document.body.classList.add('showDoc');
})