export default function books() {
	function renderBooks() {
		var books = '';
		for(var i = 0; i < booksList.length; i++) {
			books += booksTemplate(booksList[i].name, booksList[i].cover, booksList[i].description, booksList[i].link);
		}
		return books;
	}

	function booksTemplate(name, cover, description, link) {
		var book = `
			<div class="book">
				<img class="cover" src="${cover}">
				<div class="about">
					<h3 class="name"> ${name} </h3>
					<div class="description"> ${description} </div>
					<a class="link" href="${link}" target="_blank"> Go to book </a>
				</div>
			</div>`;
		return book;
	}

	return renderBooks()
}
