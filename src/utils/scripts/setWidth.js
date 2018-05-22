export default function(elementToSize) {
	function setElementSize() {
		var windowWidth = document.body.clientWidth;
		if(windowWidth <= 1200) {
			// It shit realy need because was very strange bug with this function
			return;
		}

		var initWidth = 630;
		var lastWidth = 0;
		var bodyPaddings = Math.ceil(document.body.clientWidth * 0.06) * 2;

		if(windowWidth => 1200) {
			while(windowWidth - bodyPaddings >= initWidth) {
				lastWidth = initWidth;

				if (document.body.getBoundingClientRect().width <= 1490 &&
					  document.body.getBoundingClientRect().width > 1397) {
					initWidth += 300;
				} else {
					initWidth += 340;
				}

				if(windowWidth - bodyPaddings <= initWidth) {
					elementToSize.style.width = lastWidth + 'px';
				}
			}
		}
	}

	setElementSize();
	window.addEventListener('resize', setElementSize);
}