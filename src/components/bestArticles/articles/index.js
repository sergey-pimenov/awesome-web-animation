export default function() {
	function renderArticlesBlock() {
		var articlesBlock = '';
		for(var i = 0; i < window.articles.length; i++) {
			articlesBlock += articlesBlockTemplate(window.articles[i].id, window.articles[i].name, window.articles[i].articles);
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


	function renderArticles(articlesData) {
		var articles = '';
		for(var i = 0; i < articlesData.length; i++) {
			articles += articlesTemplate(articlesData[i].title, articlesData[i].date, articlesData[i].link, articlesData[i].type);
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
					<a href="${ link }"></a>
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
					<a href="${ link }"></a>
				</article>
			`;
		}
	}

	return renderArticlesBlock();
}