var app = angular.module('BookLibraryApp');
  
  app.factory('LoginService', function() {
    let admin = 'admin';
    let pass = 'password';
    let isAuthenticated = false;
    
    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };    
  });