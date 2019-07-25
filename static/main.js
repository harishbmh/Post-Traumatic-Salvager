var App = angular.module("App",['App.controllers','App.routes','App.services']);

App.run(function($log){
	$log.log("App is ready.");
});
