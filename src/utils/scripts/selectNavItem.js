export default function(element) {
	var navItem = document.getElementsByClassName('navItem');

	for( var i = 0; i < navItem.length; i++ ) {
		navItem[i].classList.remove('selected');
	}

	if(element == 'hideAll') return;

	document.getElementsByClassName(element)[0].classList.add('selected');
}