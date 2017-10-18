import articlesData from './../../../../data/articles';

export default function() {
	function renderArticlesBlock() {
		var articlesBlock = '';
		for(var i = 0; i < articlesData.length; i++) {
			articlesBlock += articlesBlockTemplate(articlesData[i].id, articlesData[i].name, articlesData[i].articles);
		}
		return articlesBlock;
	}

	function articlesBlockTemplate(id, name, articles) {
		return `
			<section class="technology">
				<h2 class="${ id + 'Artiles' }"> ${ name } </h2>
				<div class="anchor" id="${ id + 'Anchor'}"></div>
				${ renderArticles(articles) }
			</section>
		`;
	}


	function renderArticles(data) {
		var articles = '';
		for(var i = 0; i < data.length; i++) {
			articles += articlesTemplate(data[i].title, data[i].date, data[i].link, data[i].type);
		}
		return articles;
	}

	function articlesTemplate(title, date, link, type) {
		if(type != 'video') {
			return `
				<article>
					<h3>
						<img class="type" src="assets/images/textIcon.svg">
						${ title }
					</h3>
					<time> ${ date } </time>
					<a href="${ link }" target="_blank"></a>
				</article>
			`;
		} else {
			return `
				<article>
					<h3>
						<img class="type" src="assets/images/videoIcon.svg">
						${ title }
					</h3>
					<time> ${ date } </time>
					<a href="${ link }" target="_blank"></a>
				</article>
			`;
		}
	}

	return renderArticlesBlock();
}