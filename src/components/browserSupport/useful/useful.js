export default function(usefulLinks) {
		var useful = '';
		for(var i = 0; i < usefulLinks.length; i++) {
			useful += usefulTemplate(usefulLinks[i].link, usefulLinks[i].name)
		}
		return useful;
	}

	function usefulTemplate(link, name) {
		return `
			<a href="${link}" class="usefulLink" target="_blank"> ${name} </a>
		`;
	}