import render from './../../utils/scripts/render'
import setWidth from './../../utils/scripts/setWidth'
import renderSupport from './supporting/supporting'
import renderUseful from './useful/useful.js'

export default function() {
	document.getElementsByClassName('supportNav')[0].classList.add('selected');

	var dynamicContent = document.getElementById('dynamicContent');

	var browserSupport = `
		<section class="browserSupport">
			<div class="categories">
				<button class="showCategories"> Show categories </button>
				<div class="mobileWrapper">
					<h3 class="goTo"> Go to: </h3>
					<span class="category" id="CSSAnimation"> CSS Animation </span>
					<span class="category" id="SVGAnimation"> SVG Animation </span>
					<span class="category" id="JSAnimation"> JS Animation </span>
					<span class="category" id="CSSAnimation"> CSS Animation </span>
					<span class="category" id="SVGAnimation"> SVG Animation </span>
					<span class="category" id="JSAnimation"> JS Animation </span>
				</div>
			</div>

			${renderTechnologies()}

			<div class="aboutVersions"> * Showing the latest versions of browsers </div>
		</section>
	`;

	function renderTechnologies() {
		var technologies = '';
		for( var i = 0; i < support.length; i++) {
			technologies += technologyTemplate(
																					support[i].name,
																					support[i].id,
																					renderSupport(support[i], 'desktop'),
																					renderSupport(support[i], 'mobile'),
																					renderUseful(support[i].useful)
																				);
		}
		return technologies;
	}

	function technologyTemplate(technology, id, desktop, mobile, useful) {
		return `
		<article class="technology">
			<h2> ${technology} </h2>
			<div class="anchor" id=${id + 'Anchor'}> </div>
			<div class="support">
				<div class="platform desktop">
					<h3> Desktop : </h3>
					${desktop}
				</div>
				<div class="platform mobile">
					<h3> Mobile : </h3>
				 	${mobile} 
				</div>
				<div class="useful">
					${useful}
				</div>
			</div>
		</article>
		`;
	}


	var dynamicContent = document.getElementById('dynamicContent');

	render(browserSupport, dynamicContent);

	var category = document.querySelectorAll('.categories .category');

	for(var i = 0; i < category.length; i++) {
		category[i].addEventListener('click', function(e) {
			var scroll = new SmoothScroll();

			var selectedItem = e.target.id;

			var anchor = document.querySelector('#' + selectedItem + 'Anchor');
			scroll.animateScroll(anchor, category[i], {
				after: () => {
					anchor.parentNode.classList.add('mark');
					setTimeout(() => {
						anchor.parentNode.classList.remove('mark');
					}, 210)
				}
			});

		})
	}

	var showCategories = document.getElementsByClassName('showCategories')[0];
	var mobileWrapper = document.getElementsByClassName('mobileWrapper')[0];
	var categories = document.getElementsByClassName('categories')[0];
	var headerEl = document.getElementsByTagName('header')[0];

	var scroll = new SmoothScroll();

	showCategories.addEventListener('click', () => {
		if(showCategories.getBoundingClientRect().top != 0 && !mobileWrapper.classList.contains('show')) {
			scroll.animateScroll(categories, false, {
				after: () => {
					mobileWrapper.classList.toggle('show');
					if(mobileWrapper.classList.contains('show')) {
						showCategories.innerHTML = 'Hide categories';
					}	else {
						showCategories.innerHTML = 'Show categories';
					}
				},
				speed: 300
			});
		} else {
			mobileWrapper.classList.toggle('show');
			if(mobileWrapper.classList.contains('show')) {
				showCategories.innerHTML = 'Hide categories';
			}	else {
				showCategories.innerHTML = 'Show categories';
			}
		}
	})

	var browserSupport = document.getElementsByClassName('browserSupport')[0];
	var aboutVersions = document.getElementsByClassName('aboutVersions')[0];
	setWidth(browserSupport);
	setWidth(aboutVersions);
	browserSupport.classList.add('show');
}