var app = angular.module('BookLibraryApp');
 app.controller('LoginController', function( $rootScope, $state, LoginService) {
	let vm = this;

    $rootScope.title = "AngularJS Login Sample";
    
    vm.formSubmit = function() {
      if(LoginService.login(vm.username, vm.password)) {
        $rootScope.userName = vm.username;
        vm.error = '';
        vm.username = '';
        vm.password = '';
        $state.transitionTo('books');
      } else {
        vm.error = "Incorrect username/password !";
      }   
    };    
  });