app.controller('FavoritesController', function (BooksService, FavoriteService) {
	let vm = this;

	vm.books = BooksService.getSearchResults();

	vm.favoriteBooks = vm.books.filter(function (book) {
		return FavoriteService.isFavorite(book);
	});

});