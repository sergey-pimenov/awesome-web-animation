export default function() {
	var goTopButton = document.getElementsByClassName('goTop')[0];

	var valueToShow = window.innerHeight;

	window.addEventListener('scroll', function() {
		if(window.scrollY >= valueToShow) {
			if(goTopButton.classList.contains('show')) {
				return;
			}
			goTopButton.classList.add('show');
		} else {
			if(!goTopButton.classList.contains('show')) {
				return;
			}
			goTopButton.classList.remove('show');
		}
	});

	goTopButton.addEventListener('click', () => {
		var scroll = new SmoothScroll();
		scroll.animateScroll(0);
	})

	goTopButton.addEventListener('touchend', () => {
		var scroll = new SmoothScroll();
		scroll.animateScroll(0);
	})
}