var routerApp=angular.module('muzak',['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/home');

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		})

		.state('about',{
			url:'/about',
			templateUrl:'views/about.html'
		});
});