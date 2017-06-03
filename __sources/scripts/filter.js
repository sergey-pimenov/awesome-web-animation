// Init grid and filters
var grid = document.querySelector('.tools');
var iso = new Isotope(grid, {
	getSortData: {
    size: '.size parseInt'
  },
  masonry: {
  	fitWidth: true,
	  columnWidth: 290,
	  gutter: 60
	}
});

// Filters
var filters = document.querySelector('.filters');
filters.addEventListener('click', function(event) {
  if (!matchesSelector(event.target, 'button')) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
});

// Sort
var sort = document.querySelector('.sort');
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
});

var toolsCount = toolsArr.length;
// Create tool-card
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
	logo.setAttribute('src', 'images/logos/' + toolLogo);
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
	}

	return tool;
}

window.addEventListener('load', function() {
	// Create all tools array
	var tools = [];
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < toolsCount; i++) {
	  var elem = createTool(toolsArr[i][0],
	  			toolsArr[i][1],
	 			toolsArr[i][2],
	 			toolsArr[i][3],
	 			toolsArr[i][4]);
	  fragment.appendChild(elem);
	  tools.push(elem);
	}
	// Append tools
	grid.appendChild(fragment);
	iso.appended(tools);
});

// Filter button states
var technologiesGroup = document.querySelectorAll('.technologiesGroup');
for (var i=0; i < technologiesGroup.length; i++) {
  technologiesGroup[i].addEventListener( 'click', onTechnologiesGroupClick );
}

function onTechnologiesGroupClick(event) {
  // only button clicks
  if (!matchesSelector( event.target, '.button')) {
    return;
  }
  var button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}
