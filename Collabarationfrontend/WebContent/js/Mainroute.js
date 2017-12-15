var app = angular.module("app", [ 'ngRoute','ngCookies' ])
app.config(function($routeProvider) {

	$routeProvider
	.when("/home", {
        templateUrl : 'views/home.html'
    })
    .when("/aboutus", {
        templateUrl : 'views/aboutus.html'
    })
    .when("/login",{
    	templateUrl:"views/login.html",
    	controller:'UserController'
    		})
    .when("/register",{
    	templateUrl:'views/register.html',
    	controller:'UserController'
    		})
    		.when("/editprofile",{
    	templateUrl:'views/editprofile.html',
    	controller:'UserController'
    		})
    		.when('/addblogpost', {
		templateUrl : 'views/blogpost.html', controller:'BlogPostController'
	})
	.when('/getblogs', {
		templateUrl : 'views/bloglist.html', controller:'BlogPostController'
	})
	.when('/getblogbyid/:id', {
		templateUrl : 'views/blogdetails.html', controller:'BlogPostDetailController'
	})
	
	.when('/getapprovalform/:id', {
		templateUrl : 'views/blogapproval.html', controller:'BlogPostDetailController'
	})
    
	.when('/addjob', {
		templateUrl : 'views/jobform.html', controller:'JobController'
	})
	.when('/getalljobs', {
		templateUrl : 'views/joblist.html', controller:'JobController'
	})
	.when('/uploadprofilepic', {
		templateUrl : 'views/profilepicture.html', controller:'ProfilePictureController'
	})
	 .when("/suggestedusers", {
        templateUrl : 'views/suggestedusers.html',
        controller:'FriendController'
    })
    .when('/pendingrequests',{
		templateUrl:'views/pendingRequests.html',
		controller:'FriendController'
	})
	.when('/getfriends',{
		templateUrl:'views/listoffriends.html',
		controller:'FriendController'
	})
	.when("/friendprofile/:id", {
        templateUrl : 'views/profile.html',
        controller:'FriendController'
    })
	.when('/chat',{
		templateUrl:'views/chat.html',
		controller:'ChatCtrl'
	})
	
    
	.otherwise("/home",{templateurl:"views/home.html"})
	
	})
	
	app.run(function($rootScope,$cookieStore,$location,UserService){
	
	if($rootScope.currentUser==undefined){
		$rootScope.currentUser=$cookieStore.get('currentUser')
}
		$rootScope.logout=function(){
		UserService.logout().then(function(response){
			delete $rootScope.currentUser;
			$cookieStore.remove('currentUser')
			$location.path('/login')
			
		},function(response){
			console.log(response.status)
			if(response.status==401){
				delete $rootScope.currentUser;
				$cookieStore.remove('currentUser')
				$location.path('/login')

			}
				
		})
	}

})