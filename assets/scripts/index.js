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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

		var initWidth = 630;
		var lastWidth = 0;
		var bodyPaddings = Math.ceil(document.body.clientWidth * 0.06) * 2;

		if (function (windowWidth) {
			return 1200;
		}) {
			while (windowWidth - bodyPaddings >= initWidth) {
				lastWidth = initWidth;
				initWidth += 340;
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

	dynamicContent.innerHTML = '\n\t\t<div class="bestMaterials">\n\t\t\t<div class="categories">\n\t\t\t\t<button class="showCategories"> Show categories </button>\n\t\t\t\t<div class="mobileWrapper">\n\t\t\t\t\t<h3 class="goTo">\n\t\t\t\t\t\tScroll to\n\t\t\t\t\t\t<img width="15px" height="auto" src="assets/images/goTo.svg">\n\t\t\t\t\t</h3>\n\t\t\t\t\t<span class="category" id="books" tabindex="0"> Books </span>\n\t\t\t\t\t<span class="category" id="articlesAndVideos" tabindex="0"> Articles and videos </span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<section class="books">\n\t\t\t\t<h3 class="title" id="booksTitle"> Books </h3>\n\t\t\t\t' + (0, _books2.default)() + '\n\t\t\t</section>\n\n\t\t\t<section class="articlesAndVideos">\n\t\t\t\t<div class="anchor" id="articlesAndVideosTitle"></div>\n\t\t\t\t' + (0, _articles2.default)() + '\n\t\t\t</section>\n\t\t</div>\n\t';

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

		category[i].addEventListener('keydown', function (e) {
			if (e.keyCode != 13) return;

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

var _articles = __webpack_require__(11);

var _articles2 = _interopRequireDefault(_articles);

var _books = __webpack_require__(12);

var _books2 = _interopRequireDefault(_books);

var _scrollMonitor = __webpack_require__(9);

var _scrollMonitor2 = _interopRequireDefault(_scrollMonitor);

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

	var notExist = '\n\t\t<div class="notExist">\n\t\t\t<h1> Page not exist </h1>\n\t\t\t<div class="links">\n\t\t\t\t<h2> Go to </h2>\n\t\t\t\t<a href="./#"> Best tools </a>\n\t\t\t\t<a href="#best-materials"> Best materials </a>\n\t\t\t</div>\n\t\t</div>\n\t';

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

	dynamicContent.innerHTML = '\n\t\t<div>\n\t\t\t<div class="options">\n\t\t\t\t<button class="showFilter"> Show filter </button>\n\t\t\t\t<div class="mobileWrapper">\n\t\t\t    <div class="filters">\n\t\t\t\t  \t<div class="technologiesGroup">\n\t\t\t\t\t   \t<button class="button showAll is-checked" data-filter="*"> All </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".CSS"> CSS </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".SVG"> SVG </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".DOM"> DOM </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".Canvas"> Canvas </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".Scroll"> Scroll </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".Easing"> Easing </button>\n\t\t\t\t\t   \t<button class="button" data-filter=".GUI"> GUI </button></div>\n\t\t\t    </div>\n\t\t\t    <div class="sort">\n\t\t\t      <div class="button-group">\n\t\t\t       \t<button class="button size" data-sort-value="size"> By size </button>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t \t\t</div>\n\t\t\t<div class="tools">\n\t\t\t</div>\n\t\t</div>';

	// Init grid and filters
	var grid = document.querySelector('.tools');
	var iso = new Isotope(grid, {
		getSortData: {
			size: '.size parseInt'
		},
		masonry: {
			fitWidth: true,
			columnWidth: 290,
			gutter: 50
		}
	});

	// Filters
	var filters = document.querySelector('.filters');
	var sort = document.querySelector('.sort');
	var sizeButton = document.querySelector('.button.size');

	filters.addEventListener('click', function (event) {
		if (!matchesSelector(event.target, 'button')) {
			return;
		}
		var filterValue = event.target.getAttribute('data-filter');
		iso.arrange({ filter: filterValue });

		if ((filterValue == '.Easing' || filterValue == '.GUI') && sizeButton.classList.contains('checked')) {
			sort.classList.add('alert');
		} else {
			sort.classList.remove('alert');
		}
	});

	// Sort
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

		var selectedElement = document.querySelector('.is-checked');
		var filterValue = selectedElement.getAttribute('data-filter');
		console.log(filterValue);
		if ((filterValue == '.Easing' || filterValue == '.GUI') && sizeButton.classList.contains('checked')) {
			sort.classList.add('alert');
		} else {
			sort.classList.remove('alert');
		}
	});

	// Create tool-card
	var toolsCount = toolsList.length;
	function createTool(toolName, toolLogo, toolTechnologies, toolSize, toolLink) {
		var tool = document.createElement('div');
		tool.setAttribute('tabindex', '-1');
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
		logo.setAttribute('src', 'data/logos/' + toolLogo);
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

		if (toolSize != 'none') {
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
			var elem = createTool(toolsList[i][0], toolsList[i][1], toolsList[i][2], toolsList[i][3], toolsList[i][4]);
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
        w = function () {
      function t(e, i) {
        function h() {
          if (a.viewportTop = r(e), a.viewportBottom = a.viewportTop + a.viewportHeight, a.documentHeight = n(e), a.documentHeight !== p) {
            for (w = a.watchers.length; w--;) {
              a.watchers[w].recalculateLocation();
            }p = a.documentHeight;
          }
        }function c() {
          for (u = a.watchers.length; u--;) {
            a.watchers[u].update();
          }for (u = a.watchers.length; u--;) {
            a.watchers[u].triggerCallbacks();
          }
        }o(this, t);var a = this;this.item = e, this.watchers = [], this.viewportTop = null, this.viewportBottom = null, this.documentHeight = n(e), this.viewportHeight = s(e), this.DOMListener = function () {
          t.prototype.DOMListener.apply(a, arguments);
        }, this.eventTypes = l, i && (this.containerWatcher = i.create(e));var p, w, u;this.update = function () {
          h(), c();
        }, this.recalculateLocations = function () {
          this.documentHeight = 0, this.update();
        };
      }return t.prototype.listenToDOM = function () {
        a && (window.addEventListener ? (this.item === document.body ? window.addEventListener("scroll", this.DOMListener) : this.item.addEventListener("scroll", this.DOMListener), window.addEventListener("resize", this.DOMListener)) : (this.item === document.body ? window.attachEvent("onscroll", this.DOMListener) : this.item.attachEvent("onscroll", this.DOMListener), window.attachEvent("onresize", this.DOMListener)), this.destroy = function () {
          window.addEventListener ? (this.item === document.body ? (window.removeEventListener("scroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.removeEventListener("scroll", this.DOMListener), window.removeEventListener("resize", this.DOMListener)) : (this.item === document.body ? (window.detachEvent("onscroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.detachEvent("onscroll", this.DOMListener), window.detachEvent("onresize", this.DOMListener));
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
    }();t.exports = w;
  }, function (t, e, i) {
    "use strict";
    function o(t, e, i) {
      function o(t, e) {
        if (0 !== t.length) for (E = t.length; E--;) {
          T = t[E], T.callback.call(s, e, s), T.isOne && t.splice(E, 1);
        }
      }var s = this;this.watchItem = e, this.container = t, i ? i === +i ? this.offsets = { top: i, bottom: i } : this.offsets = { top: i.top || u.top, bottom: i.bottom || u.bottom } : this.offsets = u, this.callbacks = {};for (var d = 0, f = w.length; d < f; d++) {
        s.callbacks[w[d]] = [];
      }this.locked = !1;var m, v, b, I, E, T;this.triggerCallbacks = function (t) {
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
        w = s.eventTypes,
        u = s.defaultOffsets;o.prototype = { on: function on(t, e, i) {
        switch (!0) {case t === n && !this.isInViewport && this.isAboveViewport:case t === r && this.isInViewport:case t === h && this.isFullyInViewport:case t === c && this.isAboveViewport && !this.isInViewport:case t === a && this.isInViewport && this.isAboveViewport:
            if (e.call(this, this.container.latestEvent, this), i) return;}if (!this.callbacks[t]) throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + w.join(", "));this.callbacks[t].push({ callback: e, isOne: i || !1 });
      }, off: function off(t, e) {
        if (!this.callbacks[t]) throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + w.join(", "));for (var i, o = 0; i = this.callbacks[t][o]; o++) {
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
            e = this;this.container.watchers.splice(t, 1);for (var i = 0, o = w.length; i < o; i++) {
          e.callbacks[w[i]].length = 0;
        }
      }, lock: function lock() {
        this.locked = !0;
      }, unlock: function unlock() {
        this.locked = !1;
      } };for (var d = function d(t) {
      return function (e, i) {
        this.on.call(this, t, e, i);
      };
    }, f = 0, m = w.length; f < m; f++) {
      var v = w[f];o.prototype[v] = d(v);
    }t.exports = o;
  }]);
});
//# sourceMappingURL=scrollMonitor.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	function renderArticlesBlock() {
		var articlesBlock = '';
		for (var i = 0; i < articlesList.length; i++) {
			articlesBlock += articlesBlockTemplate(articlesList[i].id, articlesList[i].name, articlesList[i].articles);
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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = books;
function books() {
	function renderBooks() {
		var books = '';
		for (var i = 0; i < booksList.length; i++) {
			books += booksTemplate(booksList[i].name, booksList[i].cover, booksList[i].description, booksList[i].link);
		}
		return books;
	}

	function booksTemplate(name, cover, description, link) {
		var book = '\n\t\t\t<div class="book">\n\t\t\t\t<img class="cover" src="data/covers/' + cover + '">\n\t\t\t\t<div class="about">\n\t\t\t\t\t<h3 class="name"> ' + name + ' </h3>\n\t\t\t\t\t<div class="description"> ' + description + ' </div>\n\t\t\t\t\t<a class="link" href="' + link + '" target="_blank"> Go to book </a>\n\t\t\t\t</div>\n\t\t\t</div>';
		return book;
	}

	return renderBooks();
}

/***/ }),
/* 13 */
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

var _bestMaterials = __webpack_require__(2);

var _bestMaterials2 = _interopRequireDefault(_bestMaterials);

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
				focusOnlyWithKeys();
				break;

			case '#':
				(0, _tools2.default)('.dynamicContent');
				(0, _selectNavItem2.default)('toolsNav');
				focusOnlyWithKeys();
				break;

			case '#best-materials':
				(0, _bestMaterials2.default)();
				(0, _selectNavItem2.default)('materialsNav');
				focusOnlyWithKeys();
				break;

			default:
				(0, _notExist2.default)();
				(0, _selectNavItem2.default)('hideAll');
				focusOnlyWithKeys();
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

// Disable focus after mouse click
// From: https://www.darrenlester.com/blog/focus-only-on-tab
function focusOnlyWithKeys() {
	var mouseDown = false;

	var focusableNodes = document.querySelectorAll('button, a');

	for (var i = 0; i < focusableNodes.length; i++) {
		focusableNodes[i].addEventListener('mousedown', function () {
			mouseDown = true;
		});

		focusableNodes[i].addEventListener('mouseup', function () {
			mouseDown = false;
		});

		focusableNodes[i].addEventListener('focus', function (event) {
			if (mouseDown) {
				event.target.blur();
			}
		});
	}
}

focusOnlyWithKeys();

/***/ })
/******/ ]);