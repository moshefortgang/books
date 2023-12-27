var app = angular.module('BookLibraryApp');

app.run(function ($state, LoginService) {
	if (!LoginService.isAuthenticated()) {
		$state.transitionTo('login');
	}
});

app.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'views/login.html',
				controller: 'LoginController'
			})
			.state('books', {
				url: '/books',
				templateUrl: 'views/books.html',
				controller: 'BooksController'
			})
			.state('favorites', {
				url: '/favorites',
				templateUrl: 'views/favorites.html',
				controller: 'FavoritesController'
			});

		$urlRouterProvider.otherwise('/login');
	}]);

