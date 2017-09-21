/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (elementToSize) {
	function setElementSize() {
		var windowWidth = document.body.clientWidth;
		if (windowWidth <= 1200) {
			// It shit realy need because was very strange bug with this function
			return;
		}

		var initWidth = 650;
		var lastWidth = 0;
		var bodyPaddings = Math.ceil(document.body.clientWidth * 0.06) * 2;

		if (function (windowWidth) {
			return 1200;
		}) {
			while (windowWidth - bodyPaddings >= initWidth) {
				lastWidth = initWidth;
				initWidth += 360;
				if (windowWidth - bodyPaddings <= initWidth) {
					elementToSize.style.width = lastWidth + 'px';
				}
			}
		}
	}

	setElementSize();
	window.addEventListener('resize', setElementSize);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (element, target) {
	target.innerHTML += element;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var dynamicContent = document.getElementById('dynamicContent');
	(0, _render2.default)('', dynamicContent);

	dynamicContent.innerHTML = '\n\t\t<div class="bestArticles">\n\t\t\t<div class="categories">\n\t\t\t\t<button class="showCategories"> Show categories </button>\n\t\t\t\t<div class="mobileWrapper">\n\t\t\t\t\t<h3 class="goTo">\n\t\t\t\t\t\tGo to\n\t\t\t\t\t\t<img width="15px" height="auto" src="assets/images/goTo.svg">\n\t\t\t\t\t</h3>\n\t\t\t\t\t<span class="category" id="CSSAnimation"> CSS Animation </span>\n\t\t\t\t\t<span class="category" id="SVGAnimation"> SVG Animation </span>\n\t\t\t\t\t<span class="category" id="JSAnimation"> JS Animation </span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t' + (0, _articles2.default)() + '\n\t\t</div>\n\t';

	var category = document.querySelectorAll('.categories .category');

	for (var i = 0; i < category.length; i++) {
		category[i].addEventListener('click', function (e) {
			var scroll = new SmoothScroll();

			var selectedItem = e.target.id;

			var anchor = document.querySelector('#' + selectedItem + 'Anchor');
			scroll.animateScroll(anchor, category[i], {
				offset: 10
			});
		});
	}

	var showCategories = document.getElementsByClassName('showCategories')[0];
	var mobileWrapper = document.getElementsByClassName('mobileWrapper')[0];
	var categories = document.getElementsByClassName('categories')[0];
	var headerEl = document.getElementsByTagName('header')[0];

	var scroll = new SmoothScroll();

	showCategories.addEventListener('click', function () {
		if (showCategories.getBoundingClientRect().top != 0 && !mobileWrapper.classList.contains('show')) {
			scroll.animateScroll(categories, false, {
				after: function after() {
					mobileWrapper.classList.toggle('show');
					if (mobileWrapper.classList.contains('show')) {
						showCategories.innerHTML = 'Hide categories';
					} else {
						showCategories.innerHTML = 'Show categories';
					}
				},
				speed: 300
			});
		} else {
			mobileWrapper.classList.toggle('show');
			if (mobileWrapper.classList.contains('show')) {
				showCategories.innerHTML = 'Hide categories';
			} else {
				showCategories.innerHTML = 'Show categories';
			}
		}
	});

	(0, _setWidth2.default)(document.getElementsByClassName('bestArticles')[0]);
};

var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

var _setWidth = __webpack_require__(0);

var _setWidth2 = _interopRequireDefault(_setWidth);

var _articles = __webpack_require__(9);

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var dynamicContent = document.getElementById('dynamicContent');
	(0, _render2.default)('', dynamicContent);

	var notExist = '\n\t\t<div class="notExist">\n\t\t\t<h1> Page not exist. </h1>\n\t\t\t<div class="links">\n\t\t\t\t<h2> Go to: </h2>\n\t\t\t\t<a href="./#"> Best tools </a>\n\t\t\t\t<a href="#best-articles"> Best materials </a>\n\t\t\t</div>\n\t\t</div>\n\t';

	var dynamicContent = document.getElementById('dynamicContent');

	(0, _render2.default)(notExist, dynamicContent);

	(0, _setWidth2.default)(document.getElementsByClassName('notExist')[0]);
};

var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

var _setWidth = __webpack_require__(0);

var _setWidth2 = _interopRequireDefault(_setWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var dynamicContent = document.getElementById('dynamicContent');
	(0, _render2.default)('', dynamicContent);

	dynamicContent.innerHTML = '\n\t\t<div>\n\t\t\t<div class="options">\n\t\t\t\t<button class="showFilter"> Show filter </button>\n\t\t\t\t<div class="mobileWrapper">\n\t\t\t    <div class="filters">\n\t\t\t\t  \t<h3> Sort: </h3>\n\t\t\t\t  \t<div class="technologiesGroup">\n\t\t\t\t\t   \t<button class="button showAll is-checked" data-filter="*"> All </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".CSS"> CSS </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".SVG"> SVG </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".DOM"> DOM </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".Canvas"> Canvas </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".Scroll"> Scroll </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".Easing"> Easing </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".GUI"> GUI </button></div>\n\t\t\t    </div>\n\t\t\t    <div class="sort">\n\t\t\t      <div class="button-group">\n\t\t\t       \t<button class="button size" data-sort-value="size"> By size </button>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t \t\t</div>\n\t\t\t<div class="tools">\n\t\t\t</div>\n\t\t</div>';

	// Init grid and filters
	var grid = document.querySelector('.tools');
	var iso = new Isotope(grid, {
		getSortData: {
			size: '.size parseInt'
		},
		masonry: {
			fitWidth: true,
			columnWidth: 290,
			gutter: 70
		}
	});

	// Filters
	var filters = document.querySelector('.filters');
	filters.addEventListener('click', function (event) {
		if (!matchesSelector(event.target, 'button')) {
			return;
		}
		var filterValue = event.target.getAttribute('data-filter');
		iso.arrange({ filter: filterValue });
	});

	// Sort
	var sort = document.querySelector('.sort');
	sort.addEventListener('click', function (event) {
		if (!matchesSelector(event.target, 'button')) {
			return;
		}
		event.target.classList.toggle('checked');
		if (event.target.classList.contains('checked')) {
			var sortValue = event.target.getAttribute('data-sort-value');
		} else {
			sortValue = 'original-order';
		}
		iso.arrange({ sortBy: sortValue });
	});

	// Create tool-card
	var toolsCount = toolsArr.length;
	function createTool(toolName, toolLogo, toolTechnologies, toolSize, toolLink) {
		var tool = document.createElement('div');
		tool.classList.add('tool');

		var link = document.createElement('a');
		link.setAttribute('href', toolLink);
		link.setAttribute('target', '_blank');
		tool.appendChild(link);

		var nameAndImg = document.createElement('div');
		nameAndImg.classList.add('nameAndImg');

		var name = document.createElement('h2');
		name.textContent = toolName;
		nameAndImg.appendChild(name);

		var logo = document.createElement('img');
		logo.setAttribute('src', 'assets/images/' + toolLogo);
		nameAndImg.appendChild(logo);

		tool.appendChild(nameAndImg);

		var characteristicsAndDescription = document.createElement('div');
		characteristicsAndDescription.classList.add('characteristicsAndDescription');
		tool.appendChild(characteristicsAndDescription);

		var technologies = document.createElement('div');
		technologies.classList.add('technologies');

		for (i = 0; i < toolTechnologies.length; i++) {
			var b = document.createElement('b');
			b.textContent = ' ' + toolTechnologies[i];
			technologies.appendChild(b);
			tool.classList.add(toolTechnologies[i]);
		}
		characteristicsAndDescription.appendChild(technologies);

		if (toolSize != '10000') {
			var size = document.createElement('div');
			size.classList.add('size');
			size.textContent = toolSize;
			characteristicsAndDescription.appendChild(size);
		} else {
			var size = document.createElement('div');
			size.classList.add('size');
			size.classList.add('hidedSize');
			size.textContent = toolSize;
			characteristicsAndDescription.appendChild(size);
		}

		return tool;
	}

	// Render tools
	function renderCards() {
		// Create all tools array
		var tools = [];
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < toolsCount; i++) {
			var elem = createTool(toolsArr[i][0], toolsArr[i][1], toolsArr[i][2], toolsArr[i][3], toolsArr[i][4]);
			fragment.appendChild(elem);
			tools.push(elem);
		}
		// Append tools
		grid.appendChild(fragment);
		iso.appended(tools);
	}

	renderCards();

	// Filter button states
	var technologiesGroup = document.querySelectorAll('.technologiesGroup');
	for (var i = 0; i < technologiesGroup.length; i++) {
		technologiesGroup[i].addEventListener('click', onTechnologiesGroupClick);
	}

	function onTechnologiesGroupClick(event) {
		// only button clicks
		if (!matchesSelector(event.target, '.button')) {
			return;
		}
		var button = event.target;
		button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
		button.classList.add('is-checked');
	}

	var showFilter = document.getElementsByClassName('showFilter')[0];
	var mobileWrapper = document.getElementsByClassName('mobileWrapper')[0];
	var options = document.getElementsByClassName('options')[0];
	var htmlEl = document.getElementsByTagName('html')[0];
	var headerEl = document.getElementsByTagName('header')[0];

	var scroll = new SmoothScroll();

	showFilter.addEventListener('click', function () {
		if (showFilter.getBoundingClientRect().top != 0 && !mobileWrapper.classList.contains('show')) {
			scroll.animateScroll(options, false, {
				after: function after() {
					mobileWrapper.classList.toggle('show');
					if (mobileWrapper.classList.contains('show')) {
						showFilter.innerHTML = 'Hide filter';
					} else {
						showFilter.innerHTML = 'Show filter';
					}
				},
				speed: 300
			});
		} else {
			mobileWrapper.classList.toggle('show');
			if (mobileWrapper.classList.contains('show')) {
				showFilter.innerHTML = 'Hide filter';
			} else {
				showFilter.innerHTML = 'Show filter';
			}
		}
	});

	(0, _setWidth2.default)(document.getElementsByClassName('options')[0]);
};

var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

var _setWidth = __webpack_require__(0);

var _setWidth2 = _interopRequireDefault(_setWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getData = getData;
function getData(url, callback) {
	var xhr = new XMLHttpRequest();

	// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
	xhr.open('GET', url, true);

	xhr.onload = function (e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			callback(xhr.responseText);
		}
	};

	// 3. Отсылаем запрос
	xhr.send(null);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var goTopButton = document.getElementsByClassName('goTop')[0];

	var valueToShow = window.innerHeight;

	window.addEventListener('scroll', function () {
		if (window.scrollY >= valueToShow) {
			if (goTopButton.classList.contains('show')) {
				return;
			}
			goTopButton.classList.add('show');
		} else {
			if (!goTopButton.classList.contains('show')) {
				return;
			}
			goTopButton.classList.remove('show');
		}
	});

	goTopButton.addEventListener('click', function () {
		var scroll = new SmoothScroll();
		scroll.animateScroll(0);
	});

	goTopButton.addEventListener('touchend', function () {
		var scroll = new SmoothScroll();
		scroll.animateScroll(0);
	});
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (element) {
	var navItem = document.getElementsByClassName('navItem');

	for (var i = 0; i < navItem.length; i++) {
		navItem[i].classList.remove('selected');
	}

	if (element == 'hideAll') return;

	document.getElementsByClassName(element)[0].classList.add('selected');
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	function renderArticlesBlock() {
		var articlesBlock = '';
		for (var i = 0; i < window.articles.length; i++) {
			articlesBlock += articlesBlockTemplate(window.articles[i].id, window.articles[i].name, window.articles[i].articles);
		}
		return articlesBlock;
	}

	function articlesBlockTemplate(id, name, articles) {
		return '\n\t\t\t<section class="technology">\n\t\t\t\t<h2 class="' + (id + 'Artiles') + '"> ' + name + ' </h2>\n\t\t\t\t<div class="anchor" id="' + (id + 'Anchor') + '"></div>\n\t\t\t\t' + renderArticles(articles) + '\n\t\t\t</section>\n\t\t';
	}

	function renderArticles(articlesData) {
		var articles = '';
		for (var i = 0; i < articlesData.length; i++) {
			articles += articlesTemplate(articlesData[i].title, articlesData[i].date, articlesData[i].link, articlesData[i].type);
		}
		return articles;
	}

	function articlesTemplate(title, date, link, type) {
		if (type != 'video') {
			return '\n\t\t\t\t<article>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<img class="type" src="assets/images/textIcon.svg">\n\t\t\t\t\t\t' + title + '\n\t\t\t\t\t</h3>\n\t\t\t\t\t<time> ' + date + ' </time>\n\t\t\t\t\t<a href="' + link + '"></a>\n\t\t\t\t</article>\n\t\t\t';
		} else {
			return '\n\t\t\t\t<article>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<img class="type" src="assets/images/videoIcon.svg">\n\t\t\t\t\t\t' + title + '\n\t\t\t\t\t</h3>\n\t\t\t\t\t<time> ' + date + ' </time>\n\t\t\t\t\t<a href="' + link + '"></a>\n\t\t\t\t</article>\n\t\t\t';
		}
	}

	return renderArticlesBlock();
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(6);

var _setWidth = __webpack_require__(0);

var _setWidth2 = _interopRequireDefault(_setWidth);

var _selectNavItem = __webpack_require__(8);

var _selectNavItem2 = _interopRequireDefault(_selectNavItem);

var _goTop = __webpack_require__(7);

var _goTop2 = _interopRequireDefault(_goTop);

var _addUserAgent = __webpack_require__(5);

var _addUserAgent2 = _interopRequireDefault(_addUserAgent);

var _tools = __webpack_require__(4);

var _tools2 = _interopRequireDefault(_tools);

var _bestArticles = __webpack_require__(2);

var _bestArticles2 = _interopRequireDefault(_bestArticles);

var _notExist = __webpack_require__(3);

var _notExist2 = _interopRequireDefault(_notExist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import renderBrowserSupport from './components/browserSupport';
// Utils
var dynamicContent = document.getElementById('dynamicContent');

// Simple routing


// Components
function route() {
	dynamicContent.classList.add('show');

	setTimeout(function () {
		dynamicContent.innerHTML = '';
		var currentLocation = window.location.hash;
		switch (currentLocation) {
			case '':
				(0, _tools2.default)('.dynamicContent');
				(0, _selectNavItem2.default)('toolsNav');
				break;

			case '#':
				(0, _tools2.default)('.dynamicContent');
				(0, _selectNavItem2.default)('toolsNav');
				break;

			case '#best-articles':
				(0, _bestArticles2.default)();
				(0, _selectNavItem2.default)('articlesNav');
				break;

			default:
				(0, _notExist2.default)();
				(0, _selectNavItem2.default)('hideAll');
				break;
		}
	}, 200);
}

window.addEventListener('load', function () {
	route();
});
window.addEventListener('hashchange', route);

// Init app
(0, _setWidth2.default)(document.getElementsByTagName('header')[0]);
(0, _goTop2.default)();
(0, _addUserAgent2.default)();

setTimeout(function () {
	document.body.classList.add('showDoc');
}, 300);

/***/ })
/******/ ]);