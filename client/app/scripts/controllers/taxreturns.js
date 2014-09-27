'use strict';
 
angular.module('clientApp') // make sure this is set to whatever it is in your client/scripts/app.js
	.controller('taxReturnsCtrl', function ($scope, $http) { // note the added $http depedency
		
		// Here we're creating some local references
		// so that we don't have to type $scope every
		// damn time
		var user, taxReturns;
 
		// Here we're creating a scope for our Signup page.
		// This will hold our data and methods for this page.
		//$scope taxReturns = taxReturns = {};
 
		// In our taxReturns.html, we'll be using the ng-model
		// attribute to populate this object.
	    taxReturns.user = user = {};
 
		// This is our method that will post to our server.
	 taxReturns.submit = function () {
			
			// make sure all fields are filled out...
			// aren't you glad you're not typing out
			// $scope taxReturns.user.firstname everytime now??
			if (
				!user.firstname ||
				!user.lastname ||
				!user.email ||
				!user.password1 ||
				!user.password2
			) {
				alert('Please fill out all form fields.');
				return false;
			}
 
			// make sure the passwords match match
			if (user.password1 !== user.password2) {
				alert('Your passwords must match.');
				return false;
			}
 
			// Just so we can confirm that the bindings are working
			console.log(user);
 
			// Make the request to the server
			var request = $http.post(' taxReturns', user);
 
			request.success(function (data) {
				console.log(data.msg);
			});
 
			request.error(function (data) {
				console.log(data.msg);
			});
 
		};
		
	});