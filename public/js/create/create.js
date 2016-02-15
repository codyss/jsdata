'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl' 
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, Post, $state, $stateParams) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	var userID = $stateParams.userId;
	console.log(userID);

	$scope.newPost = {};
	$scope.newPost.author = userID;
	$scope.createNewPost = function () {
		Post.create($scope.newPost)
		$state.go('main');
	}
	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 