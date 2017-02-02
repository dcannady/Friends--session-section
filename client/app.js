var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/login',{
      templateUrl: 'partials/login.html',
    })
    .otherwise({
      redirectTo: '/login'
    });
});
