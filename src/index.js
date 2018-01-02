// Utils
import { getData } from './utils/scripts/getData';
import setHeaderWidth from './utils/scripts/setWidth';
import selectNavItem from './utils/scripts/selectNavItem';
import initGoTopButton from './utils/scripts/goTop.js';
import addUserAgent from './utils/scripts/addUserAgent.js';

// Components
import renderTools from './components/tools';
// import renderBrowserSupport from './components/browserSupport';
import renderBestMaterials from './components/bestMaterials';
import renderNotExist from './components/notExist';

var dynamicContent = document.getElementById('dynamicContent');


// Simple routing
function route() {
	dynamicContent.classList.add('show');

	setTimeout(function() {
		dynamicContent.innerHTML = '';
		var currentLocation = window.location.hash;
		switch(currentLocation) {
		  case '':
		    renderTools('.dynamicContent');
		    selectNavItem('toolsNav');
		    focusOnlyWithKeys();
		    break;

		  case '#':
		    renderTools('.dynamicContent');
		    selectNavItem('toolsNav');
		    focusOnlyWithKeys();
		    break;

		  case '#best-materials':
		   	renderBestMaterials();
		   	selectNavItem('materialsNav');
		   	focusOnlyWithKeys();
		    break;

		  default:
		  	renderNotExist();
		  	selectNavItem('hideAll');
		  	focusOnlyWithKeys();
		    break;
		}
	}, 200)
}

window.addEventListener('load', function() {
	route();
})
window.addEventListener('hashchange', route);


// Init app
setHeaderWidth(document.getElementsByTagName('header')[0]);
initGoTopButton();
addUserAgent();

setTimeout( () => {
	document.body.classList.add('showDoc');
}, 300);


// Disable focus after mouse click
// From: https://www.darrenlester.com/blog/focus-only-on-tab
function focusOnlyWithKeys() {
	let mouseDown = false;

	var focusableNodes = document.querySelectorAll('button, a');

	for( var i = 0; i < focusableNodes.length; i++) {
		focusableNodes[i].addEventListener('mousedown', () => {
		  mouseDown = true;
		});

		focusableNodes[i].addEventListener('mouseup', () => {
		  mouseDown = false;
		});

		focusableNodes[i].addEventListener('focus', (event) => {
		  if (mouseDown) {
		    event.target.blur();
		  }
		});
	}
}

focusOnlyWithKeys();