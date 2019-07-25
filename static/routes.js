var Routes = angular.module("App.routes",['ngRoute']);

Routes.config(function($routeProvider){

	$routeProvider
		.when('/home',{
			templateUrl:'	home.html',
			controller:'HomeController'
		}).when('/monitor',{
			templateUrl:'	monitor.html',
			controller:'MonitorController'
		}).when('/settings',{
			templateUrl:'	settings.html',
			controller:'SettingsController'
		})
		.when('/about',{
			templateUrl:'about.html',
			controller:'AboutController'
		})
		.when('/QuickStart',{
			templateUrl:'QuickStart.html',
			controller:'QuickStartController'
		})
		.when('/liveQueue',{
			templateUrl:'liveQueue.html',
			controller:'LiveQueueController'
		})
		.when('/historicalQueue',{
			templateUrl:'historicalQueue.html',
			controller:'HistoricalQueueController'
		})
		.when('/predictQueue',{
			templateUrl:'predictQueue.html',
			controller:'PredictQueueController'
		})
		.when('/IntelliCruiseQueue',{
			templateUrl:'IntelliCruiseQueue.html',
			controller:'IntelliCruiseQueueController'
		})
		.when('/liveJvm',{
			templateUrl:'livejvm.html',
			controller:'LiveJvmController'
		})
		.when('/historicalJvm',{
			templateUrl:'historicaljvm.html',
			controller:'HistoricalJvmController'
		})
		.when('/predictJvm',{
			templateUrl:'predictjvm.html',
			controller:'PredictJvmController'
		})
		.when('/IntelliCruiseJvm',{
			templateUrl:'IntelliCruiseJvm.html',
			controller:'IntelliCruiseJvmController'
		})
		.when('/queueChart',{
			templateUrl:'queueChart.html',
			controller:'QueueChartController'
		})
		.when('/movingChart',{
			templateUrl:'movingChart.html',
			controller:'MovingChartController'
		})
		.otherwise({
			redirectTo:'/home'
		});
});
