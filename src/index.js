// Utils
import { getData } from './utils/scripts/getData';
import setHeaderWidth from './utils/scripts/setWidth';
import selectNavItem from './utils/scripts/selectNavItem';
import initGoTopButton from './utils/scripts/goTop.js';
import addUserAgent from './utils/scripts/addUserAgent.js';

// Components
import renderTools from './components/tools';
import renderBrowserSupport from './components/browserSupport';
import renderBestArticles from './components/bestArticles';
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
		    break;

		  case '#':
		    renderTools('.dynamicContent');
		    selectNavItem('toolsNav');
		    break;


		  case '#browser-support':
		   	renderBrowserSupport();
		   	selectNavItem('supportNav')
		    break;

		  case '#best-articles':
		   	renderBestArticles();
		   	selectNavItem('articlesNav')
		    break;

		  default:
		  	renderNotExist();
		  	selectNavItem('hideAll')
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