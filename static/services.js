var Services = angular.module("App.services",[]);

Services.factory('funnyJokesFactory',function(){

	var funnyJokes = {};

	funnyJokes.jokes = ["Mondays are always welcome","Fridays are boring","Wednesday are awaited"];


	funnyJokes.nextJoke = function(){
		var idx = Math.floor(Math.random()*this.jokes.length);
		return this.jokes[idx];
	};

	return funnyJokes;	
});

Services.service('funnyJokes',function($log){
	var jokes = ["Mondays are always welcome","Fridays are boring","Wednesday are awaited"];

	this.nextJoke = function(){
		var idx = Math.floor(Math.random()*jokes.length);
		return jokes[idx];
	}

	this.addJoke = function(arg){
		jokes.push(arg);
		$log.info("New Joke added, Total Count is : "+jokes.length);
	}

});	


Services.service('StringToJson',function($log){
	
	this.convert = function(stringData){

		var root = angular.element(stringData.trim());
		var allUsers = root.find('user');
		var jsonData = [];

		for(var i=0;i<allUsers.length;i++){
			
			var user = allUsers.eq(i);
			
			jsonData.push({
				id:user.attr('id'),
				name:user.find('name').text(),
				age:user.find('age').text()
			});	
		}
	
		return jsonData;
		
	}

});	

