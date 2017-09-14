import render from './../../utils/scripts/render'
import setWidth from './../../utils/scripts/setWidth';
import renderArticlesBlock from './articles';

export default function() {
	var dynamicContent = document.getElementById('dynamicContent');
	render('', dynamicContent);

	dynamicContent.innerHTML = `
		<div class="bestArticles">
			<div class="categories">
				<button class="showCategories"> Show categories </button>
				<div class="mobileWrapper">
					<h3 class="goTo">
						Go to
						<img width="15px" height="auto" src="assets/images/goTo.svg">
					</h3>
					<span class="category" id="CSSAnimation"> CSS Animation </span>
					<span class="category" id="SVGAnimation"> SVG Animation </span>
					<span class="category" id="JSAnimation"> JS Animation </span>
				</div>
			</div>

			${ renderArticlesBlock() }
		</div>
	`;


	var category = document.querySelectorAll('.categories .category');

	for(var i = 0; i < category.length; i++) {
		category[i].addEventListener('click', function(e) {
			var scroll = new SmoothScroll();

			var selectedItem = e.target.id;

			var anchor = document.querySelector('#' + selectedItem + 'Anchor');
			scroll.animateScroll(anchor, category[i]);
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


	setWidth(document.getElementsByClassName('bestArticles')[0]);
}