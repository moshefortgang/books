var app = angular.module('BookLibraryApp');

app.controller('BooksController', function (BooksService) {
	let vm = this;

	vm.searchQuery = BooksService.getSearchQuery();
	vm.books = BooksService.getSearchResults();
	vm.currentPage = 1;

	vm.searchBooks = function () {

		BooksService.setSearchQuery(vm.searchQuery);

		BooksService.searchBooks(vm.searchQuery, vm.currentPage)
			.then(function () {
				vm.books = BooksService.getSearchResults();
			})
			.catch(function (error) {
				console.error('Error fetching books:', error);
			});
	};

	vm.nextPage = function () {
		vm.currentPage++;
		vm.searchBooks();
	};

	vm.prevPage = function () {
		if (vm.currentPage > 1) {
			vm.currentPage--;
			vm.searchBooks();
		}
	};

});
