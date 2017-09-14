export default function() {
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
}