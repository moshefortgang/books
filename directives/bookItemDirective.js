angular.module('BookLibraryApp').directive('bookItem', ["$mdDialog", "FavoriteService", function ($mdDialog, FavoriteService) {
	return {
		restrict: 'E',
		scope: {
			book: '=',
		},
		templateUrl: 'views/book-item.html',
		link: function (scope, elem, attr) {
			scope.showDialog = function ($event) {
				var parentEl = angular.element(document.body);

				$mdDialog.show({
					parent: parentEl,
					targetEvent: $event,
					templateUrl: 'views/dialog.html',
					locals: {
						book: scope.book
					},
					controller: DialogController,
					controllerAs: 'ctrl'
				});

				function DialogController($mdDialog, book) {
					this.book = book;
					this.closeDialog = function () {
						$mdDialog.hide();
					};
				}
			};

			scope.isLocalStorageEnable = FavoriteService.isLocalStorageEnable;
			scope.isFavorite = FavoriteService.isFavorite(scope.book);
			scope.markAs = function (type) {
				switch (type) {
					case true:
						FavoriteService.setFav(scope.book);
						break;
					case false:
						FavoriteService.deleteFav(scope.book);
						break;
				}
				scope.isFavorite = type;
			};
		}
	};
}]);
