import render from './../../utils/scripts/render'
import setWidth from './../../utils/scripts/setWidth'

export default function() {
	var dynamicContent = document.getElementById('dynamicContent');
	render('', dynamicContent);

	var notExist = `
		<div class="notExist">
			<h1> Page not exist </h1>
			<div class="links">
				<h2> Go to </h2>
				<a href="./#"> Best tools </a>
				<a href="#best-materials"> Best materials </a>
			</div>
		</div>
	`;

	var dynamicContent = document.getElementById('dynamicContent');

	render(notExist, dynamicContent);

	setWidth(document.getElementsByClassName('notExist')[0])
}