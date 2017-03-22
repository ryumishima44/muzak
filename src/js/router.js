var routerApp=angular.module('muzak',['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/home');

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html'
		})

		.state('about',{
			url:'/about',
			templateUrl:'/about.html'
		});
});