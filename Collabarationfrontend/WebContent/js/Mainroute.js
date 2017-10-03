var myApp=angular.module("myApp",['ngRoute'])

myApp.config(function ($routeProvider)
{
	$routeProvider
	.when("/home", {
        templateUrl : 'views/home.html'
    })
    .when("/login",{templateUrl:"views/login.html"})
    .when("/register",{
    	templateUrl:'views/register.html',
    	controller:'UserController'
    		})
    
	.otherwise("/home",{templateurl:"views/home.html"})
	
	})