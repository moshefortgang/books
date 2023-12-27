var app = angular.module('BookLibraryApp');

app.service("FavoriteService", [function () {

    this.isLocalStorageEnable = function () {
        if (typeof (Storage) !== "undefined") {
            return true;
        } else {
            return false;
        }
    };

    this.isFavorite = function (scope) {
        let fav = localStorage.getItem("favoritesBooks");
        return fav && fav.includes(scope.id);
    };

    this.setFav = function (scope) {
        let fav = localStorage.getItem("favoritesBooks") || '';
        if (!fav.includes(scope.id)) {
            fav += scope.id + ",";
            localStorage.setItem("favoritesBooks", fav);
        }
    };

    this.deleteFav = function (scope) {
        let fav = localStorage.getItem("favoritesBooks") || '';
        fav = fav.replace(scope.id + ",", "");
        localStorage.setItem("favoritesBooks", fav);
    };
}]);
