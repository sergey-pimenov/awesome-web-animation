import render from './../../utils/scripts/render'
import setWidth from './../../utils/scripts/setWidth';
import renderArticlesBlock from './articles';
import renderBooks from './books';
import scrollMonitor from 'scrollMonitor';

// Articles
import books from './../../../data/books.js';

export default function() {
	var dynamicContent = document.getElementById('dynamicContent');
	render('', dynamicContent);

	dynamicContent.innerHTML = `
		<div class="bestMaterials">
			<div class="categories">
				<button class="showCategories"> Show categories </button>
				<div class="mobileWrapper">
					<h3 class="goTo">
						Go to
						<img width="15px" height="auto" src="assets/images/goTo.svg">
					</h3>
					<span class="category" id="books"> Books </span>
					<span class="category" id="articlesAndVideos"> Articles and videos </span>
				</div>
			</div>

			<section class="books">
				<h3 class="title" id="booksTitle"> Books </h3>
				${ renderBooks() }
			</section>

			<section class="articlesAndVideos">
				<div class="anchor" id="articlesAndVideosTitle"></div>
				${ renderArticlesBlock() }
			</section>
		</div>
	`;


	var category = document.querySelectorAll('.categories .category');

	for(var i = 0; i < category.length; i++) {
		category[i].addEventListener('click', function(e) {
			var scroll = new SmoothScroll();

			var selectedItem = e.target.id;

			var anchor = document.querySelector('#' + selectedItem + 'Title');
			scroll.animateScroll(anchor, category[i], {
				offset : 65
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

	console.log(window.innerHeight)

	var booksNode = document.querySelector('.books');
	var articlesAndVideosNode = document.querySelector('.articlesAndVideos');
	var booksNav = document.querySelector('#books')
	var articlesAndVideosNav = document.querySelector('#articlesAndVideos')

	var booksWatcher = scrollMonitor.create(booksNode, {top: -600, bottom: -100});
	var articlesAndVideosWatcher = scrollMonitor.create(articlesAndVideosNode, {top: -window.innerHeight + 58 + 100 });

	booksWatcher.enterViewport(function() {
		booksNav.classList.add('selected');
	});
	booksWatcher.exitViewport(function() {
	    booksNav.classList.remove('selected');
	});

	 articlesAndVideosWatcher.enterViewport(function() {
	    articlesAndVideosNav.classList.add('selected');
	});
	 articlesAndVideosWatcher.exitViewport(function() {
	    articlesAndVideosNav.classList.remove('selected');
	});


	setWidth(document.getElementsByClassName('bestMaterials')[0]);
}