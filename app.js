var App = angular.module('App', ['ui.router']);

App.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
  
    .state('/home', {
        url: '/home',
        templateUrl: 'home/index.html'
    })
    .state('/about', {
        url: '/about',
        templateUrl: 'about/index.html'
    })
    .state('/resources', {
        url: '/resources',
        templateUrl: 'resources/index.html'
    })
    $locationProvider.html5Mode(true);
        
});

App.controller('main', function($scope) {
    
});