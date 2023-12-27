var app = angular.module('BookLibraryApp');

app.service('BooksService', function ($http) {
	let searchQuery = '';
	let searchResults = [];

	this.searchBooks = function (searchQuery, currentPage) {
		let apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + searchQuery + '&startIndex=' + (currentPage - 1) * 10;

		return $http.get(apiUrl)
			.then(function (response) {
				searchResults = response.data.items;
				return searchResults;
			});
	};

	this.getSearchResults = function () {
		return searchResults;
	};

	this.setSearchQuery = function (text) {
		searchQuery = text;
	};

	this.getSearchQuery = function () {
		return searchQuery;
	};
});
