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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
var books = [{
	"name": "SVG animation",
	"cover": "assets/images/svg-animations.png",
	"description": "<p> \n\t\t\t\t\t\t\t SVG is extremely powerful, with its reduced HTTP requests and \n\t\t\t\t\t\t\t crispness on any display. It becomes increasingly more interesting \n\t\t\t\t\t\t\t as you explore its capabilities for responsive animation and \n\t\t\t\t\t\t\t performance boons. When you animate SVG, you must be aware \n\t\t\t\t\t\t\t of normal image traits like composition, color, implementation, \n\t\t\t\t\t\t\t and optimization. But when you animate, it increases the \n\t\t\t\t\t\t\t complexity of each of these factors exponentially. </p>\n\t\t\t\t\t\t\t <p> This practical book takes a deep dive into how you can to \n\t\t\t\t\t\t\t solve these problems with stability, performance, \n\t\t\t\t\t\t\t and creativity in mind.\n\t\t\t\t\t\t </p>",
	"link": "https://www.amazon.com/SVG-Animations-Implementations-Responsive-Animation/dp/1491939702"
}, {
	"name": "Creating Web Animations: Bringing Your UIs to Life",
	"cover": "assets/images/Creating-Web-Animations.png",
	"description": "<p>\n\t\t\t\t\t\t\tThanks to faster browsers, better web standards support, \n\t\t\t\t\t\t\tand more powerful devices, the web now defines the next \n\t\t\t\t\t\t\tgeneration of user interfaces that are fun, practical, \n\t\t\t\t\t\t\tfluid, and memorable. The key? Animation. But learning \n\t\t\t\t\t\t\thow to create animations is hard, and existing learning \n\t\t\t\t\t\t\tmaterial doesn\u2019t explain the context of the UI problem \n\t\t\t\t\t\t\tthat animations are trying to solve. That\u2019s where this book comes in.\n\t\t\t\t\t\t </p>",
	"link": "https://www.amazon.com/Creating-Web-Animations-Bringing-Your/dp/1491957514/"
}, {
	"name": "Transitions and Animations in CSS: Adding Motion with CSS",
	"cover": "assets/images/trans.jpg",
	"description": "<p> \n\t\t\t\t\t\t\tAdd life and depth to your web applications and improve user \n\t\t\t\t\t\t\texperience through the discrete use of CSS transitions and \n\t\t\t\t\t\t\tanimations. With this concise guide, you\u2019ll learn how to \n\t\t\t\t\t\t\tmake page elements move or change in appearance, whether \n\t\t\t\t\t\t\tyou want to realistically bounce a ball, gradually expand \n\t\t\t\t\t\t\ta drop-down menu, or simply bring attention to an \n\t\t\t\t\t\t\telement when users hover over it. \n\t\t\t\t\t\t </p>",
	"link": "https://www.amazon.com/Transitions-Animations-CSS-Adding-Motion/dp/149192988X/"
}, {
	"name": "Designing Interface Animation: Meaningful Motion for User Experience",
	"cover": "assets/images/experience.jpg",
	"description": "<p> \n\t\t\t\t\t\t\tEffective interface animation deftly combines form and \n\t\t\t\t\t\t\tfunction to improve feedback, aid in orientation, direct \n\t\t\t\t\t\t\tattention, show causality, and express your brand's personality. \n\t\t\t\t\t\t\tDesigning Interface Animation shows you how to create web animation \n\t\t\t\t\t\t\tthat balances purpose and style while blending seamlessly into the \n\t\t\t\t\t\t\tuser s experience. This book is a crash course in motion design \n\t\t\t\t\t\t\ttheory and practice for web designers, UX professionals, \n\t\t\t\t\t\t\tand front-end developers alike.\n\t\t\t\t\t\t </p>",
	"link": "https://www.amazon.com/Designing-Interface-Animation-Meaningful-Experience/dp/1933820322/"
}, {
	"name": "Web Animation using JavaScript: Develop & Design",
	"cover": "assets/images/web.png",
	"description": "<p> \n\t\t\t\t\t\t\tWe've come a long way since the days of flashing banner ads \n\t\t\t\t\t\t\tand scrolling news tickers. Today, the stunning motion design \n\t\t\t\t\t\t\tof iOS and Android dramatically improves a user's experience - \n\t\t\t\t\t\t\tinstead of detracting from it. The best sites and apps of \n\t\t\t\t\t\t\ttoday leverage animation to improve the feel and \n\t\t\t\t\t\t\tintuitiveness of their interfaces. Sites without animation \n\t\t\t\t\t\t\tare starting to feel antiquated.\n\t\t\t\t\t\t </p>",
	"link": "https://www.amazon.com/Web-Animation-using-JavaScript-Develop/dp/0134096665"
}, {
	"name": "CSS Animations and Transitions for the Modern Web",
	"cover": "assets/images/modern.png",
	"description": "<p> \n\t\t\t\t\t\t\tModern websites use a variety of animated effects not only to \n\t\t\t\t\t\t\timprove usability but also to delight and surprise users. Some \n\t\t\t\t\t\t\tof these effects require complex scripting or programming skills, \n\t\t\t\t\t\t\tbut many are within the grasp of designers who are already familiar \n\t\t\t\t\t\t\twith CSS and HTML. CSS Animations and Transitions for the \n\t\t\t\t\t\t\tModern Web shows designers how to add movement to web pages \n\t\t\t\t\t\t\tover time using CSS3 style definitions.\n\t\t\t\t\t\t </p>",
	"link": "https://www.amazon.com/gp/product/0133980502/"
}, {
	"name": "Animation in HTML, CSS, and JavaScript",
	"cover": "assets/images/anhtml.png",
	"description": "<p> \n\t\t\t\t\t\t\tThis book will help you create practical / usable / wickedly-cool \n\t\t\t\t\t\t\tanimations in HTML, CSS, and JavaScript. Each chapter is \n\t\t\t\t\t\t\tfilled with cleanly explained concepts, beautifully \n\t\t\t\t\t\t\tillustrated diagrams, colorific code snippets, and \n\t\t\t\t\t\t\tcringeworthy one-liners guaranteed to make your \n\t\t\t\t\t\t\tfriend who laughs at everything groan.\n\t\t\t\t\t\t </p>",
	"link": "https://www.amazon.com/Animation-HTML-JavaScript-Kirupa-Chinnathambi/dp/1502548704"
}];

exports.default = books;

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

	dynamicContent.innerHTML = '\n\t\t<div class="bestMaterials">\n\t\t\t<div class="categories">\n\t\t\t\t<button class="showCategories"> Show categories </button>\n\t\t\t\t<div class="mobileWrapper">\n\t\t\t\t\t<h3 class="goTo">\n\t\t\t\t\t\tGo to\n\t\t\t\t\t\t<img width="15px" height="auto" src="assets/images/goTo.svg">\n\t\t\t\t\t</h3>\n\t\t\t\t\t<span class="category" id="books"> Books </span>\n\t\t\t\t\t<span class="category" id="articlesAndVideos"> Articles and videos </span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<section class="books">\n\t\t\t\t<h3 class="title" id="booksTitle"> Books </h3>\n\t\t\t\t' + (0, _books2.default)() + '\n\t\t\t</section>\n\n\t\t\t<section class="articlesAndVideos">\n\t\t\t\t<div class="anchor" id="articlesAndVideosTitle"></div>\n\t\t\t\t' + (0, _articles2.default)() + '\n\t\t\t</section>\n\t\t</div>\n\t';

	var category = document.querySelectorAll('.categories .category');

	for (var i = 0; i < category.length; i++) {
		category[i].addEventListener('click', function (e) {
			var scroll = new SmoothScroll();

			var selectedItem = e.target.id;

			var anchor = document.querySelector('#' + selectedItem + 'Title');
			scroll.animateScroll(anchor, category[i], {
				offset: 65
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

	console.log(window.innerHeight);

	var booksNode = document.querySelector('.books');
	var articlesAndVideosNode = document.querySelector('.articlesAndVideos');
	var booksNav = document.querySelector('#books');
	var articlesAndVideosNav = document.querySelector('#articlesAndVideos');

	var booksWatcher = _scrollMonitor2.default.create(booksNode, { top: -600, bottom: -100 });
	var articlesAndVideosWatcher = _scrollMonitor2.default.create(articlesAndVideosNode, { top: -window.innerHeight + 58 + 100 });

	booksWatcher.enterViewport(function () {
		booksNav.classList.add('selected');
	});
	booksWatcher.exitViewport(function () {
		booksNav.classList.remove('selected');
	});

	articlesAndVideosWatcher.enterViewport(function () {
		articlesAndVideosNav.classList.add('selected');
	});
	articlesAndVideosWatcher.exitViewport(function () {
		articlesAndVideosNav.classList.remove('selected');
	});

	(0, _setWidth2.default)(document.getElementsByClassName('bestMaterials')[0]);
};

var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

var _setWidth = __webpack_require__(0);

var _setWidth2 = _interopRequireDefault(_setWidth);

var _articles = __webpack_require__(14);

var _articles2 = _interopRequireDefault(_articles);

var _books = __webpack_require__(15);

var _books2 = _interopRequireDefault(_books);

var _scrollMonitor = __webpack_require__(12);

var _scrollMonitor2 = _interopRequireDefault(_scrollMonitor);

var _books3 = __webpack_require__(2);

var _books4 = _interopRequireDefault(_books3);

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

	var notExist = '\n\t\t<div class="notExist">\n\t\t\t<h1> Page not exist. </h1>\n\t\t\t<div class="links">\n\t\t\t\t<h2> Go to: </h2>\n\t\t\t\t<a href="./#"> Best tools </a>\n\t\t\t\t<a href="#best-materials"> Best materials </a>\n\t\t\t</div>\n\t\t</div>\n\t';

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
/* 5 */
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
	var toolsCount = _toolsList2.default.length;
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
			var elem = createTool(_toolsList2.default[i][0], _toolsList2.default[i][1], _toolsList2.default[i][2], _toolsList2.default[i][3], _toolsList2.default[i][4]);
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
		// Only button clicks
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

var _toolsList = __webpack_require__(11);

var _toolsList2 = _interopRequireDefault(_toolsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var articles = [{
	"name": "CSS Animation",
	"id": "CSSAnimation",
	"articles": [{
		"title": "Scaling Responsive Animations",
		"date": "19.12.16",
		"link": "https://css-tricks.com/scaling-responsive-animations/",
		"type": "text"
	}, {
		"title": "Swapping State with CSS Keyframes",
		"date": "22.11.16",
		"link": "https://css-tricks.com/swapping-state-css-keyframes/",
		"type": "text"
	}, {
		"title": "The complete guide to getting 60fps animations with CSS",
		"date": "02.11.16",
		"link": "https://blog.gyrosco.pe/smooth-css-animations-7d8ffc2c1d29",
		"type": "text"
	}, {
		"title": "Using CSS Transitions on Auto Dimensions",
		"date": "03.10.17",
		"link": "https://css-tricks.com/using-css-transitions-auto-dimensions/",
		"type": "text"
	}, {
		"title": "Complex Responsive Animations",
		"date": "25.06.15",
		"link": "https://www.youtube.com/watch?v=09_8edPAsR8",
		"type": "video"
	}, {
		"title": "Debugging CSS Keyframe Animations",
		"date": "03.08.15",
		"link": "https://css-tricks.com/debugging-css-keyframe-animations/",
		"type": "text"
	}, {
		"title": "Starting CSS Animations Mid-Way",
		"date": "19.08.2014",
		"link": "https://css-tricks.com/starting-css-animations-mid-way/",
		"type": "text"
	}, {
		"title": "Silky Smooth Animation with CSS",
		"date": "30.09.2016",
		"link": "https://www.youtube.com/watch?v=bEoLCZzWZX8",
		"type": "video"
	}, {
		"title": "CSS Animation Tricks",
		"date": "01.16.14",
		"link": "https://css-tricks.com/css-animation-tricks/",
		"type": "text"
	}]
}, {
	"name": "SVG Animation",
	"id": "SVGAnimation",
	"articles": [{
		"title": "Interactive Data Visualization: Animating the viewBox",
		"date": "08.06.16",
		"link": "https://css-tricks.com/interactive-data-visualization-animating-viewbox/",
		"type": "text"
	}, {
		"title": "Animating SVG with CSS",
		"date": "17.04.14",
		"link": "https://css-tricks.com/animating-svg-css/",
		"type": "text"
	}, {
		"title": "SVG Line Animation Tutorial with CSS & Other Fun Stuff",
		"date": "27.04.14",
		"link": "https://www.youtube.com/watch?v=XBdbgD2BaEI",
		"type": "video"
	}, {
		"title": "“Drawing On” Animation - CSS Experiments",
		"date": "21.07.15",
		"link": "https://www.youtube.com/watch?v=FGblL4QHrAw",
		"type": "video"
	}, {
		"title": "Create a Single Animated SVG File Containing CSS, Fonts & JavaScript",
		"date": "08.07.15",
		"link": "https://www.youtube.com/watch?v=S6P_N2JWSrc",
		"type": "video"
	}, {
		"title": "Transforms on SVG Elements",
		"date": "05.05.15",
		"link": "https://css-tricks.com/transforms-on-svg-elements/",
		"type": "text"
	}, {
		"title": "How SVG Shape Morphing Works",
		"date": "24.10.14",
		"link": "https://css-tricks.com/svg-shape-morphing-works/",
		"type": "text"
	}, {
		"title": "Three Ways to Animate SVG",
		"date": "14.12.14",
		"link": "https://css-tricks.com/video-screencasts/135-three-ways-animate-svg/",
		"type": "video"
	}, {
		"title": "The Many Tools for Shape Morphing",
		"date": "24.04.17",
		"link": "https://css-tricks.com/many-tools-shape-morphing/",
		"type": "text"
	}, {
		"title": "Weighing SVG Animation Techniques (with Benchmarks)",
		"date": "27.01.15",
		"link": "https://css-tricks.com/weighing-svg-animation-techniques-benchmarks/",
		"type": "text"
	}, {
		"title": "Intricate SVG Animations",
		"date": "04.08.16",
		"link": "https://www.youtube.com/watch?v=wc8ovZZ78SY",
		"type": "video"
	}, {
		"title": "The Simple Intro to SVG Animation",
		"date": "31.07.14",
		"link": "https://davidwalsh.name/svg-animation",
		"type": "text"
	}, {
		"title": "Masking SVG Animations",
		"date": "15.12.13",
		"link": "https://medium.com/@gordonnl/stylised-line-animations-ded23320ffe5",
		"type": "text"
	}, {
		"title": "SVG Line Animation for the Uninitiated",
		"date": "12.11.16",
		"link": "https://medium.com/bitmatica-lab/svg-line-animation-for-the-uninitiated-5a65d91c6044",
		"type": "text"
	}]
}];

exports.default = articles;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var toolsArr = [['Snap.svg', 'snapsvg.png', ['SVG'], '81', 'http://snapsvg.io'], ['Svg.js', 'svgjs.png', ['SVG'], '64', 'http://svgjs.com'], ['GSAP', 'gsap.jpg', ['DOM', 'SVG'], '41', 'https://greensock.com'], ['Anime.js', 'animeJs.png', ['DOM'], '11', 'http://anime-js.com'], ['Animo.js', 'animojs.svg', ['DOM'], '6', 'https://animo.js.org'], ['CreateJs', 'createjs.svg', ['Canvas', 'DOM'], '186', 'http://www.createjs.com'], ['Bhive', 'bhive.png', ['Canvas'], '36', 'http://www.bhivecanvas.com'], ['Two.js', 'twojs.png', ['Canvas'], '50', 'https://two.js.org'], ['Ocanvas', 'ocanvas.png', ['Canvas'], '73', 'http://ocanvas.org'], ['AOS', 'aos.svg', ['Scroll'], '13', 'https://michalsnik.github.io/aos'], ['Wow.js', 'wow-logo.jpg', ['Scroll'], '13', 'http://mynameismatthieu.com/WOW'], ['ScrollReveal', 'scrollrevealjs.svg', ['Scroll'], '9', 'https://scrollrevealjs.org'], ['Scroll magic', 'scrollmagic.png', ['Scroll'], '17', 'http://scrollmagic.io'], ['Ceaser', 'ceaser.svg', ['Easing'], '10000', 'https://matthewlein.com/ceaser'], ['Magic Animations', 'magicanimations.png', ['CSS'], '16', 'https://minimamente.com/example/magic_animations'], ['Cubic Bezier', 'cubicbezier.svg', ['Easing'], '10000', 'http://cubic-bezier.com'], ['Buttons', 'buttons.png', ['CSS'], '80', 'http://unicorn-ui.com/buttons'], ['Stylie', 'stylie.png', ['GUI'], '10000', 'http://jeremyckahn.github.io/stylie'], ['Keyframer', 'keyframer.svg', ['GUI'], '10000', 'http://alexberg.in/keyframer'], ['Animateplus', 'animateplus.svg', ['SVG', 'CSS'], '9', 'https://github.com/bendc/animateplus'], ['Vivus', 'vivus.png', ['SVG'], '11', 'http://maxwellito.github.io/vivus'], ['Raphaël', 'raphaël.svg', ['SVG'], '11', 'http://dmitrybaranovskiy.github.io/raphael'], ['Walkway', 'walkway.svg', ['SVG'], '4', 'https://connoratherton.com/walkway'], ['BonsaiJS', 'bonsaijs.svg', ['SVG'], '130', 'http://bonsaijs.org'], ['ProgressbarJS', 'progressbarjs.svg', ['SVG'], '21', 'http://kimmobrunfeldt.github.io/progressbar.js'], ['SVG Morpheus', 'SVGMorpheus.svg', ['SVG'], '22', 'http://alexk111.github.io/SVG-Morpheus'], ['VelocityJS', 'velocityjs.svg', ['SVG', 'DOM'], '43', 'http://velocityjs.org'], ['MoveJS', 'movejs.svg', ['DOM'], '14', 'http://visionmedia.github.io/move.js'], ['TextillateJS', 'textillatejs.svg', ['DOM'], '8', 'http://textillate.js.org'], ['Firmin', 'firmin.svg', ['DOM'], '8', 'http://extralogical.net/projects/firmin'], ['AliceJS', 'alicejs.png', ['DOM'], '50', 'http://blackberry.github.io/Alice'], ['Motio', 'motio.svg', ['DOM'], '4', 'http://darsa.in/motio'], ['Animatic', 'animaticjs.svg', ['DOM'], '22', 'http://lvivski.com/animatic'], ['Animate.css', 'animatecss.svg', ['CSS'], '17', 'https://daneden.github.io/animate.css'], ['Motion UI', 'motionui.svg', ['CSS'], '17', 'http://zurb.com/playground/motion-ui'], ['CSS loaders', 'cssloaders.svg', ['GUI'], '10000', 'https://projects.lukehaas.me/css-loaders'], ['BounceJS', 'bouncejs.svg', ['GUI'], '10000', 'http://bouncejs.com'], ['Spinkit', 'spinkit.svg', ['GUI', 'CSS'], '10000', 'http://tobiasahlin.com/spinkit'], ['Cssanimate', 'cssanimate.svg', ['GUI', 'CSS'], '10000', 'http://cssanimate.com'], ['CSS Animation Kit', 'cssanimationkit.svg', ['GUI', 'CSS'], '10000', 'http://angrytools.com/css/animation'], ['Superscrollorama', 'superscrollorama.svg', ['Scroll'], '16', 'http://johnpolacek.github.io/superscrollorama'], ['CSS3 Animation Cheat Sheet', 'CSS3AnimationCheatSheet.svg', ['CSS'], '12', 'http://www.justinaguilar.com/animations'], ['Skrollr', 'skrollr.svg', ['Scroll'], '12', 'http://prinzhorn.github.io/skrollr'], ['FabricJS', 'fabricjs.svg', ['Canvas'], '248', 'http://fabricjs.com'], ['PaperJS', 'paperjs.svg', ['Canvas'], '277', 'http://paperjs.org'], ['Konvajs', 'konva.svg', ['Canvas'], '138', 'https://konvajs.github.io'], ['Bezier easing', 'beziereasing.svg', ['Easing'], '10000', 'https://github.com/gre/bezier-easing']];

exports.default = toolsArr;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.scrollMonitor = e() : t.scrollMonitor = e();
}(undefined, function () {
  return function (t) {
    function e(o) {
      if (i[o]) return i[o].exports;var s = i[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports;
    }var i = {};return e.m = t, e.c = i, e.p = "", e(0);
  }([function (t, e, i) {
    "use strict";
    var o = i(1),
        s = o.isInBrowser,
        n = i(2),
        r = new n(s ? document.body : null);r.setStateFromDOM(null), r.listenToDOM(), s && (window.scrollMonitor = r), t.exports = r;
  }, function (t, e) {
    "use strict";
    e.VISIBILITYCHANGE = "visibilityChange", e.ENTERVIEWPORT = "enterViewport", e.FULLYENTERVIEWPORT = "fullyEnterViewport", e.EXITVIEWPORT = "exitViewport", e.PARTIALLYEXITVIEWPORT = "partiallyExitViewport", e.LOCATIONCHANGE = "locationChange", e.STATECHANGE = "stateChange", e.eventTypes = [e.VISIBILITYCHANGE, e.ENTERVIEWPORT, e.FULLYENTERVIEWPORT, e.EXITVIEWPORT, e.PARTIALLYEXITVIEWPORT, e.LOCATIONCHANGE, e.STATECHANGE], e.isOnServer = "undefined" == typeof window, e.isInBrowser = !e.isOnServer, e.defaultOffsets = { top: 0, bottom: 0 };
  }, function (t, e, i) {
    "use strict";
    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function s(t) {
      return c ? 0 : t === document.body ? window.innerHeight || document.documentElement.clientHeight : t.clientHeight;
    }function n(t) {
      return c ? 0 : t === document.body ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight) : t.scrollHeight;
    }function r(t) {
      return c ? 0 : t === document.body ? window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop;
    }var h = i(1),
        c = h.isOnServer,
        a = h.isInBrowser,
        l = h.eventTypes,
        p = i(3),
        u = !1;if (a) try {
      var w = Object.defineProperty({}, "passive", { get: function get() {
          u = !0;
        } });window.addEventListener("test", null, w);
    } catch (t) {}var d = !!u && { capture: !1, passive: !0 },
        f = function () {
      function t(e, i) {
        function h() {
          if (a.viewportTop = r(e), a.viewportBottom = a.viewportTop + a.viewportHeight, a.documentHeight = n(e), a.documentHeight !== p) {
            for (u = a.watchers.length; u--;) {
              a.watchers[u].recalculateLocation();
            }p = a.documentHeight;
          }
        }function c() {
          for (w = a.watchers.length; w--;) {
            a.watchers[w].update();
          }for (w = a.watchers.length; w--;) {
            a.watchers[w].triggerCallbacks();
          }
        }o(this, t);var a = this;this.item = e, this.watchers = [], this.viewportTop = null, this.viewportBottom = null, this.documentHeight = n(e), this.viewportHeight = s(e), this.DOMListener = function () {
          t.prototype.DOMListener.apply(a, arguments);
        }, this.eventTypes = l, i && (this.containerWatcher = i.create(e));var p, u, w;this.update = function () {
          h(), c();
        }, this.recalculateLocations = function () {
          this.documentHeight = 0, this.update();
        };
      }return t.prototype.listenToDOM = function () {
        a && (window.addEventListener ? (this.item === document.body ? window.addEventListener("scroll", this.DOMListener, d) : this.item.addEventListener("scroll", this.DOMListener, d), window.addEventListener("resize", this.DOMListener)) : (this.item === document.body ? window.attachEvent("onscroll", this.DOMListener) : this.item.attachEvent("onscroll", this.DOMListener), window.attachEvent("onresize", this.DOMListener)), this.destroy = function () {
          window.addEventListener ? (this.item === document.body ? (window.removeEventListener("scroll", this.DOMListener, d), this.containerWatcher.destroy()) : this.item.removeEventListener("scroll", this.DOMListener, d), window.removeEventListener("resize", this.DOMListener)) : (this.item === document.body ? (window.detachEvent("onscroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.detachEvent("onscroll", this.DOMListener), window.detachEvent("onresize", this.DOMListener));
        });
      }, t.prototype.destroy = function () {}, t.prototype.DOMListener = function (t) {
        this.setStateFromDOM(t);
      }, t.prototype.setStateFromDOM = function (t) {
        var e = r(this.item),
            i = s(this.item),
            o = n(this.item);this.setState(e, i, o, t);
      }, t.prototype.setState = function (t, e, i, o) {
        var s = e !== this.viewportHeight || i !== this.contentHeight;if (this.latestEvent = o, this.viewportTop = t, this.viewportHeight = e, this.viewportBottom = t + e, this.contentHeight = i, s) for (var n = this.watchers.length; n--;) {
          this.watchers[n].recalculateLocation();
        }this.updateAndTriggerWatchers(o);
      }, t.prototype.updateAndTriggerWatchers = function (t) {
        for (var e = this.watchers.length; e--;) {
          this.watchers[e].update();
        }for (e = this.watchers.length; e--;) {
          this.watchers[e].triggerCallbacks(t);
        }
      }, t.prototype.createCustomContainer = function () {
        return new t();
      }, t.prototype.createContainer = function (e) {
        "string" == typeof e ? e = document.querySelector(e) : e && e.length > 0 && (e = e[0]);var i = new t(e, this);return i.setStateFromDOM(), i.listenToDOM(), i;
      }, t.prototype.create = function (t, e) {
        "string" == typeof t ? t = document.querySelector(t) : t && t.length > 0 && (t = t[0]);var i = new p(this, t, e);return this.watchers.push(i), i;
      }, t.prototype.beget = function (t, e) {
        return this.create(t, e);
      }, t;
    }();t.exports = f;
  }, function (t, e, i) {
    "use strict";
    function o(t, e, i) {
      function o(t, e) {
        if (0 !== t.length) for (E = t.length; E--;) {
          y = t[E], y.callback.call(s, e, s), y.isOne && t.splice(E, 1);
        }
      }var s = this;this.watchItem = e, this.container = t, i ? i === +i ? this.offsets = { top: i, bottom: i } : this.offsets = { top: i.top || w.top, bottom: i.bottom || w.bottom } : this.offsets = w, this.callbacks = {};for (var d = 0, f = u.length; d < f; d++) {
        s.callbacks[u[d]] = [];
      }this.locked = !1;var m, v, b, I, E, y;this.triggerCallbacks = function (t) {
        switch (this.isInViewport && !m && o(this.callbacks[r], t), this.isFullyInViewport && !v && o(this.callbacks[h], t), this.isAboveViewport !== b && this.isBelowViewport !== I && (o(this.callbacks[n], t), v || this.isFullyInViewport || (o(this.callbacks[h], t), o(this.callbacks[a], t)), m || this.isInViewport || (o(this.callbacks[r], t), o(this.callbacks[c], t))), !this.isFullyInViewport && v && o(this.callbacks[a], t), !this.isInViewport && m && o(this.callbacks[c], t), this.isInViewport !== m && o(this.callbacks[n], t), !0) {case m !== this.isInViewport:case v !== this.isFullyInViewport:case b !== this.isAboveViewport:case I !== this.isBelowViewport:
            o(this.callbacks[p], t);}m = this.isInViewport, v = this.isFullyInViewport, b = this.isAboveViewport, I = this.isBelowViewport;
      }, this.recalculateLocation = function () {
        if (!this.locked) {
          var t = this.top,
              e = this.bottom;if (this.watchItem.nodeName) {
            var i = this.watchItem.style.display;"none" === i && (this.watchItem.style.display = "");for (var s = 0, n = this.container; n.containerWatcher;) {
              s += n.containerWatcher.top - n.containerWatcher.container.viewportTop, n = n.containerWatcher.container;
            }var r = this.watchItem.getBoundingClientRect();this.top = r.top + this.container.viewportTop - s, this.bottom = r.bottom + this.container.viewportTop - s, "none" === i && (this.watchItem.style.display = i);
          } else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = this.container.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === t && void 0 === e || this.top === t && this.bottom === e || o(this.callbacks[l], null);
        }
      }, this.recalculateLocation(), this.update(), m = this.isInViewport, v = this.isFullyInViewport, b = this.isAboveViewport, I = this.isBelowViewport;
    }var s = i(1),
        n = s.VISIBILITYCHANGE,
        r = s.ENTERVIEWPORT,
        h = s.FULLYENTERVIEWPORT,
        c = s.EXITVIEWPORT,
        a = s.PARTIALLYEXITVIEWPORT,
        l = s.LOCATIONCHANGE,
        p = s.STATECHANGE,
        u = s.eventTypes,
        w = s.defaultOffsets;o.prototype = { on: function on(t, e, i) {
        switch (!0) {case t === n && !this.isInViewport && this.isAboveViewport:case t === r && this.isInViewport:case t === h && this.isFullyInViewport:case t === c && this.isAboveViewport && !this.isInViewport:case t === a && this.isInViewport && this.isAboveViewport:
            if (e.call(this, this.container.latestEvent, this), i) return;}if (!this.callbacks[t]) throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + u.join(", "));this.callbacks[t].push({ callback: e, isOne: i || !1 });
      }, off: function off(t, e) {
        if (!this.callbacks[t]) throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + u.join(", "));for (var i, o = 0; i = this.callbacks[t][o]; o++) {
          if (i.callback === e) {
            this.callbacks[t].splice(o, 1);break;
          }
        }
      }, one: function one(t, e) {
        this.on(t, e, !0);
      }, recalculateSize: function recalculateSize() {
        this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height;
      }, update: function update() {
        this.isAboveViewport = this.top < this.container.viewportTop, this.isBelowViewport = this.bottom > this.container.viewportBottom, this.isInViewport = this.top < this.container.viewportBottom && this.bottom > this.container.viewportTop, this.isFullyInViewport = this.top >= this.container.viewportTop && this.bottom <= this.container.viewportBottom || this.isAboveViewport && this.isBelowViewport;
      }, destroy: function destroy() {
        var t = this.container.watchers.indexOf(this),
            e = this;this.container.watchers.splice(t, 1);for (var i = 0, o = u.length; i < o; i++) {
          e.callbacks[u[i]].length = 0;
        }
      }, lock: function lock() {
        this.locked = !0;
      }, unlock: function unlock() {
        this.locked = !1;
      } };for (var d = function d(t) {
      return function (e, i) {
        this.on.call(this, t, e, i);
      };
    }, f = 0, m = u.length; f < m; f++) {
      var v = u[f];o.prototype[v] = d(v);
    }t.exports = o;
  }]);
});
//# sourceMappingURL=scrollMonitor.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	function renderArticlesBlock() {
		var articlesBlock = '';
		for (var i = 0; i < _articles2.default.length; i++) {
			articlesBlock += articlesBlockTemplate(_articles2.default[i].id, _articles2.default[i].name, _articles2.default[i].articles);
		}
		return articlesBlock;
	}

	function articlesBlockTemplate(id, name, articles) {
		return '\n\t\t\t<section class="technology">\n\t\t\t\t<h2 class="' + (id + 'Artiles') + '"> ' + name + ' </h2>\n\t\t\t\t<div class="anchor" id="' + (id + 'Anchor') + '"></div>\n\t\t\t\t' + renderArticles(articles) + '\n\t\t\t</section>\n\t\t';
	}

	function renderArticles(data) {
		var articles = '';
		for (var i = 0; i < data.length; i++) {
			articles += articlesTemplate(data[i].title, data[i].date, data[i].link, data[i].type);
		}
		return articles;
	}

	function articlesTemplate(title, date, link, type) {
		if (type != 'video') {
			return '\n\t\t\t\t<article>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<img class="type" src="assets/images/textIcon.svg">\n\t\t\t\t\t\t' + title + '\n\t\t\t\t\t</h3>\n\t\t\t\t\t<time> ' + date + ' </time>\n\t\t\t\t\t<a href="' + link + '" target="_blank"></a>\n\t\t\t\t</article>\n\t\t\t';
		} else {
			return '\n\t\t\t\t<article>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<img class="type" src="assets/images/videoIcon.svg">\n\t\t\t\t\t\t' + title + '\n\t\t\t\t\t</h3>\n\t\t\t\t\t<time> ' + date + ' </time>\n\t\t\t\t\t<a href="' + link + '" target="_blank"></a>\n\t\t\t\t</article>\n\t\t\t';
		}
	}

	return renderArticlesBlock();
};

var _articles = __webpack_require__(10);

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = books;

var _books = __webpack_require__(2);

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function books() {
	function renderBooks() {
		var books = '';
		for (var i = 0; i < _books2.default.length; i++) {
			books += booksTemplate(_books2.default[i].name, _books2.default[i].cover, _books2.default[i].description, _books2.default[i].link);
		}
		return books;
	}

	function booksTemplate(name, cover, description, link) {
		var book = '\n\t\t\t<div class="book">\n\t\t\t\t<img class="cover" src="' + cover + '">\n\t\t\t\t<div class="about">\n\t\t\t\t\t<h3 class="name"> ' + name + ' </h3>\n\t\t\t\t\t<div class="description"> ' + description + ' </div>\n\t\t\t\t\t<a class="link" href="' + link + '" target="_blank"> Go to book </a>\n\t\t\t\t</div>\n\t\t\t</div>';
		return book;
	}

	return renderBooks();
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(7);

var _setWidth = __webpack_require__(0);

var _setWidth2 = _interopRequireDefault(_setWidth);

var _selectNavItem = __webpack_require__(9);

var _selectNavItem2 = _interopRequireDefault(_selectNavItem);

var _goTop = __webpack_require__(8);

var _goTop2 = _interopRequireDefault(_goTop);

var _addUserAgent = __webpack_require__(6);

var _addUserAgent2 = _interopRequireDefault(_addUserAgent);

var _tools = __webpack_require__(5);

var _tools2 = _interopRequireDefault(_tools);

var _bestMaterials = __webpack_require__(3);

var _bestMaterials2 = _interopRequireDefault(_bestMaterials);

var _notExist = __webpack_require__(4);

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

			case '#best-materials':
				(0, _bestMaterials2.default)();
				(0, _selectNavItem2.default)('materialsNav');
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