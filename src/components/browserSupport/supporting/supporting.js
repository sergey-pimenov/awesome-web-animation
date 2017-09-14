export default function(api, platform) {
	var markup = '';
	var origin = api[platform];
	for( var i = 0; i < origin.length; i++) {
		markup += supportTemplate(origin[i].name, origin[i].support, origin[i].icon)
	}
	return markup;
}

function supportTemplate(browser, support, icon) {
	return `<span class="browser ${support}">
		<img width="15px" height="auto" src="assets/images/${icon}" class="browserIcon">
		<span> ${browser} </span>
	</span>`;
}