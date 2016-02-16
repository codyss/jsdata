'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
				users: function (User) {
					return User.findAll()
			}

		}
		/*
				add a resolve block that retrieves all the users
				so that the author field of the posts will be automatically 
				populated
		*/
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($stateParams, $scope, $state, Post, users) {
	
	var postID = $stateParams.postId;
	$scope.users = users;

	$scope.post = Post.get(postID);

	$scope.update = function () {
		Post.update(postID, {body: $scope.post.body}).then(post => {
			$state.go('main')
		})
	}

	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope 
		on controller load 
	*/


	/*
		2. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})