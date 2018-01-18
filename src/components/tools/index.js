import render from './../../utils/scripts/render'
import setWidth from './../../utils/scripts/setWidth';

export default function() {
	var dynamicContent = document.getElementById('dynamicContent');
	render('', dynamicContent);

	dynamicContent.innerHTML = `
		<div>
			<div class="options">
				<button class="showFilter"> Show filter </button>
				<div class="mobileWrapper">
			    <div class="filters">
				  	<div class="technologiesGroup">
					   	<button class="button showAll is-checked" data-filter="*"> All </button>
					   	<button class="button" data-filter=".CSS"> CSS </button>
					   	<button class="button" data-filter=".SVG"> SVG </button>
					   	<button class="button" data-filter=".DOM"> DOM </button>
					   	<button class="button" data-filter=".Canvas"> Canvas </button>
					   	<button class="button" data-filter=".Scroll"> Scroll </button>
					   	<button class="button" data-filter=".Easing"> Easing </button>
					   	<button class="button" data-filter=".GUI"> GUI </button></div>
			    </div>
			    <div class="sort">
			      <div class="button-group">
			       	<button class="button size" data-sort-value="size"> By size </button>
			      </div>
			    </div>
			  </div>
	 		</div>
			<div class="tools">
			</div>
		</div>`;


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

	filters.addEventListener('click', function(event) {
	  if (!matchesSelector(event.target, 'button')) {
	    return;
	  }
	  var filterValue = event.target.getAttribute('data-filter');
	  iso.arrange({ filter: filterValue });

	  if((filterValue == '.Easing' || filterValue == '.GUI') && sizeButton.classList.contains('checked')) {
	  	sort.classList.add('alert');
	  } else {
	  	sort.classList.remove('alert');
	  }
	});


	// Sort
	sort.addEventListener('click', function(event) {
	  if (!matchesSelector(event.target, 'button')) {
	    return;
	  }

	  event.target.classList.toggle('checked');

	  if(event.target.classList.contains('checked')) {
	  	var sortValue = event.target.getAttribute('data-sort-value');
	  } else {
	  	sortValue = 'original-order';
	  }

	  iso.arrange({ sortBy: sortValue });

	  var selectedElement = document.querySelector('.is-checked');
	  var filterValue = selectedElement.getAttribute('data-filter');
	  console.log(filterValue)
	  if((filterValue == '.Easing' || filterValue == '.GUI') && sizeButton.classList.contains('checked')) {
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

		for(i = 0; i < toolTechnologies.length; i++) {
			var b = document.createElement('b');
			b.textContent = ' ' + toolTechnologies[i];
			technologies.appendChild(b);
			tool.classList.add(toolTechnologies[i]);
		}
		characteristicsAndDescription.appendChild(technologies);

		if(toolSize != 'none') {
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
		  var elem = createTool(toolsList[i][0],
										  			toolsList[i][1],
											 			toolsList[i][2],
											 			toolsList[i][3],
											 			toolsList[i][4]);
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
	for (var i=0; i < technologiesGroup.length; i++) {
	  technologiesGroup[i].addEventListener( 'click', onTechnologiesGroupClick );
	}

	function onTechnologiesGroupClick(event) {
	  // Only button clicks
	  if (!matchesSelector( event.target, '.button')) {
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

	showFilter.addEventListener('click', () => {
		if(showFilter.getBoundingClientRect().top != 0 && !mobileWrapper.classList.contains('show')) {
			scroll.animateScroll(options, false, {
				after: () => {
					mobileWrapper.classList.toggle('show');
					if(mobileWrapper.classList.contains('show')) {
						showFilter.innerHTML = 'Hide filter';
					}	else {
						showFilter.innerHTML = 'Show filter';
					}
				},
				speed: 300
			});
		} else {
			mobileWrapper.classList.toggle('show');
				if(mobileWrapper.classList.contains('show')) {
					showFilter.innerHTML = 'Hide filter';
				}	else {
					showFilter.innerHTML = 'Show filter';
				}
		}
	})

	setWidth(document.getElementsByClassName('options')[0]);

}
