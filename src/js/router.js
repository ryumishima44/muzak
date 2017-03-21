var routerApp=angular.module('app',['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/home');

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/public/home.html'
		})

		.state('about',{
			url:'/about',
			templateUrl:'/public/about.html'

		});
});